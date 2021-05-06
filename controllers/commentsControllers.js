const ItineraryModel = require('../models/ItineraryModel')

const commentsControllers = {

    addNewComment: async (req, res) => {

        const { _id, firstName, lastName, userPic } = req.user
        const prueba = await ItineraryModel.findOneAndUpdate({ _id: req.params.id }, {
            $push: {
                comments: {
                    userId: _id,
                    userName: firstName + ' ' + lastName,
                    userPic,
                    ...req.body
                }
            }
        }, { new: true })
        res.json({ response: prueba.comments })
    },

    deleteComment: async (req, res) => {

        const loQueSeEncontro = await ItineraryModel.findOne({ "comments._id": req.params.id, "comments.userId": req.user._id })
        const arrayComments = await ItineraryModel.findOneAndUpdate({ "comments._id": req.params.id }, { $pull: { 'comments': { '_id': req.params.id } } }, { new: true })

        res.json({ response: arrayComments.comments })


    },

    editComment: async (req, res) => {
        const loQueSeEncontro = await ItineraryModel.findOne({ "comments._id": req.params.id, "comments.userId": req.user._id })
        const itineraryModified = await ItineraryModel.findOneAndUpdate({ "comments._id": req.params.id }, { $set: { "comments.$.text": req.body.text } }, { new: true })

        res.send({ response: itineraryModified.comments })
    }
}

module.exports = commentsControllers

// const comments = await ItineraryModel.updateMany({"comments.userId": req.params.id}, {$set:{"comments.$[e].text": req.body.text}})
        // const comments = await ItineraryModel.updateMany({"comments.userId": req.params.id}, {"comments.$[e].text": req.body.text}, { arrayFilters: [{ 'e.userId': req.params.id }] })