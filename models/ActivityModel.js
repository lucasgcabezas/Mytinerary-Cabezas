const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    itineraryId: { type: mongoose.Types.ObjectId, ref: 'itinerary', required: true }
})

const ActivityModel = mongoose.model('activity', activitySchema)
module.exports = ActivityModel

