const ItineraryModel = require('../models/ItineraryModel')

const citiesControllers = {
    allItineraries: async (req, res) => {
        try {
            const allItineraries = await ItineraryModel.find()
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
    }
}

module.exports = citiesControllers