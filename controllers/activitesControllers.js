const ActivityModel = require('../models/ActivityModel')

const activityControllers = {
    addNewActivity: async (req, res) => {
        try {
            const activityToAdd = new ActivityModel(req.body)
            await activityToAdd.save()
            const allActivities = await ActivityModel.find()
            res.json({ success: true, response: allActivities })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller addNewItinerary has failed')
        }
    },

    activityForItinerary: async (req, res) => {
        try {
            const selectedActivities = await ActivityModel.find({ itineraryId: req.params.id })
            res.json({ success: true, response: selectedActivities })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller itinerariesForCity has failed')
        }
    },

    // deleteItinerary: async (req, res) => {
    //     try {
    //         const deleteItinerary = await ItineraryModel.findOneAndDelete({ _id: req.params.id })
    //         res.json({ success: true, response: deleteItinerary })
    //     } catch (error) {
    //         res.json({ success: false, response: 'An error occurred while processing your request' })
    //         console.log('ERROR: The controller deleteItinerary has failed')
    //     }
    // },

    // updateItinerary: async (req, res) => {
    //     try {
    //         const updateItinerary = await ItineraryModel.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
    //         res.json({ success: true, response: updateItinerary })
    //     } catch (error) {
    //         res.json({ success: false, response: 'An error occurred while processing your request' })
    //         console.log('The controller updateCity has failed')
    //     }
    // }
}

module.exports = activityControllers

