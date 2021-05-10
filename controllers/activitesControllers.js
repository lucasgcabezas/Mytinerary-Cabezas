const ActivityModel = require('../models/ActivityModel')

const activityControllers = {
    allActivities: async (req, res) => {
        try {
            const allActivities = await ActivityModel.find().populate('itineraryId')
            res.json({ success: true, response: allActivities })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller allActivities has failed')
        }
    },

    addNewActivity: async (req, res) => {
        try {
            const activityToAdd = new ActivityModel(req.body)
            await activityToAdd.save()
            const allActivities = await ActivityModel.find().populate('itineraryId')
            res.json({ success: true, response: allActivities })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller addNewActivity has failed')
        }
    },

    activityForItinerary: async (req, res) => {
        try {
            const selectedActivities = await ActivityModel.find({ itineraryId: req.params.id })
            res.json({ success: true, response: selectedActivities })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller activityForItinerary has failed')
        }
    },

    deleteActivity: async (req, res) => {
        try {
            const deleteActivity = await ActivityModel.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true, response: deleteActivity })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('ERROR: The controller deleteActivity has failed')
        }
    },

    modifyActivity: async (req, res) => {
        try {
            await ActivityModel.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
            const allActivities = await ActivityModel.find().populate('itineraryId')
            res.json({ success: true, response: allActivities })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('The controller modifyActivity has failed')
        }
    }
}

module.exports = activityControllers

