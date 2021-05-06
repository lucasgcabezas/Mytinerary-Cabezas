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

        const loQueSeEncontro = await ItineraryModel.findOne({ "_id": req.params.id, "usersLike": req.user._id })

        if (loQueSeEncontro) {
            const itinerarioConLike = await ItineraryModel.findOneAndUpdate({ "_id": req.params.id }, { $pull: { 'usersLike': req.user._id  } }, { new: true })
            const itineraryModified = await ItineraryModel.findOneAndUpdate({ "_id": req.params.id }, { $set: { "likes": itinerarioConLike.usersLike.length } }, { new: true })
            res.json({ response: {likes: itineraryModified.likes, liked: false} })

        } else {
            const itinerarioConLike = await ItineraryModel.findOneAndUpdate({ "_id": req.params.id }, { $push: { 'usersLike': req.user._id } }, { new: true })
            const itineraryModified = await ItineraryModel.findOneAndUpdate({ "_id": req.params.id }, { $set: { "likes": itinerarioConLike.usersLike.length } }, { new: true })
            res.json({ response: {likes: itineraryModified.likes, liked: true} })
        }
    }
}

module.exports = itineraryControllers

// deleteComment: async (req, res) => {

//     const loQueSeEncontro = await ItineraryModel.findOne({ "comments._id": req.params.id, "comments.userId": req.user._id })
//     const arrayComments = await ItineraryModel.findOneAndUpdate({ "comments._id": req.params.id }, { $pull: { 'comments': { '_id': req.params.id } } }, { new: true })

//     res.json({ response: arrayComments.comments })


// },

