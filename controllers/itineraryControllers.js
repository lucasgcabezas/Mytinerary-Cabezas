const ItineraryModel = require('../models/ItineraryModel')

const itineraryControllers = {
    allItineraries: async (req, res) => {
        try {
            const allItineraries = await ItineraryModel.find().populate('cityId')
            res.json({ success: true, response: allItineraries })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller allItineraries has failed')
        }
    },

    addNewItinerary: async (req, res) => {
        try {
            const itineraryToAdd = new ItineraryModel(req.body)
            await itineraryToAdd.save()
            const allItineraries = await ItineraryModel.find()
            res.json({ success: true, response: allItineraries })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller addNewItinerary has failed')
        }
    },

    obtainOneItinerary: async (req, res) => {
        try {
            const oneItinerary = await ItineraryModel.findById(req.params.id)
            res.json({ success: true, response: oneItinerary })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller obtainOneItinerary has failed')
        }
    },

    itinerariesForCity: async (req, res) => {
        try {
            const selectedItineraries = await ItineraryModel.find({ cityId: req.params.id })
            res.json({ success: true, response: selectedItineraries })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller itinerariesForCity has failed')
        }
    },

    deleteItinerary: async (req, res) => {
        try {
            const deleteItinerary = await ItineraryModel.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true, response: deleteItinerary })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller deleteItinerary has failed')
        }
    },

    updateItinerary: async (req, res) => {
        try {
            const updateItinerary = await ItineraryModel.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
            res.json({ success: true, response: updateItinerary })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('The controller updateCity has failed')
        }
    },

    likeItinerary: async (req, res) => {
        const { id } = req.params
        const { _id } = req.user
        let response;
        let error;

        try {
            const itineraryToLike = await ItineraryModel.findOne({ "_id": id, "usersLike": _id })

            let pullOrPush = itineraryToLike ? '$pull' : '$push'
            let liked = itineraryToLike ? false : true
            let itineraryLiked = await ItineraryModel.findOneAndUpdate({ "_id": id }, { [pullOrPush]: { 'usersLike': _id } }, { new: true })
            let itineraryModified = await ItineraryModel.findOneAndUpdate({ "_id": id }, { $set: { "likes": itineraryLiked.usersLike.length } }, { new: true })

            response = { likes: itineraryModified.likes, liked }
        } catch {
            error = "An error occurred during process, please try later."
        }

        res.json({
            success: !error ? true : false,
            response,
            error
        })
    },


// HACER CACHEO
    checkUserLogged: async (req, res) => {
        // const loQueSeEncontro = await ItineraryModel.findById({ "_id": req.params.id, "usersLike": req.user._id })
        const itineraryToCheck = await ItineraryModel.findById(req.params.id)

        let commentsOwnerArray = itineraryToCheck.comments.map(comment => {
            if (comment.userId.toString() === req.user._id.toString()) {
                return comment._id
            }
        })

        let likedChek = itineraryToCheck.usersLike.some(userId => userId == req.user._id)
        res.json({ response: { arrayOwnerCheck: commentsOwnerArray, likedChek } })
    }
}

module.exports = itineraryControllers

