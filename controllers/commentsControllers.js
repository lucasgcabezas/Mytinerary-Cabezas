const ItineraryModel = require('../models/ItineraryModel')

const commentsControllers = {

    addNewComment: async (req, res) => {
        const { _id, firstName, lastName, userPic } = req.user
        let response;
        let arrayOwnerCheck;
        let error;

        try {
            const itineraryToUpdate = await ItineraryModel.findOneAndUpdate({ _id: req.params.id }, {
                $push: { comments: { userId: _id, userName: firstName + ' ' + lastName, userPic, ...req.body } }
            }, { new: true })

            let commentsOwnerArray = itineraryToUpdate.comments.map(comment => {
                if (comment.userId.toString() === _id.toString()) {
                    return comment._id
                }
            })
            response = itineraryToUpdate.comments
            arrayOwnerCheck = commentsOwnerArray

        } catch {
            error = "An error occurred during process, please try later."
        }

        res.json({ success: !error ? true : false, response, arrayOwnerCheck, error })
    },

    deleteComment: async (req, res) => {
        let response;
        let error;

        try {
            const itineraryWithComment = await ItineraryModel.findOne({ "comments._id": req.params.id, "comments.userId": req.user._id })
            if (itineraryWithComment) {
                const itineraryComments = await ItineraryModel.findOneAndUpdate({ "comments._id": req.params.id }, { $pull: { 'comments': { '_id': req.params.id } } }, { new: true })
                response = itineraryComments.comments
            } else {
                error = "You are not authorized to delete this comment."
            }
        } catch {
            error = "An error occurred during process, please try later."
        }

        res.json({ success: !error ? true : false, response, error })
    },

    editComment: async (req, res) => {
        let response;
        let error;

        try {
            const itineraryWithComment = await ItineraryModel.findOne({ "comments._id": req.params.id, "comments.userId": req.user._id })
            if (itineraryWithComment) {
                const itineraryModified = await ItineraryModel.findOneAndUpdate({ "comments._id": req.params.id }, { $set: { "comments.$.text": req.body.text } }, { new: true })
                response = itineraryModified.comments
            } else {
                error = "You are not authorized to delete this comment."
            }
        } catch {
            error = "An error occurred during process, please try later."
        }

        res.json({ success: !error ? true : false, response, error })
    }
}

module.exports = commentsControllers

// const comments = await ItineraryModel.updateMany({"comments.userId": req.params.id}, {$set:{"comments.$[e].text": req.body.text}})
// const comments = await ItineraryModel.updateMany({"comments.userId": req.params.id}, {"comments.$[e].text": req.body.text}, { arrayFilters: [{ 'e.userId': req.params.id }] })