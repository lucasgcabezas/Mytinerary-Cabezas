const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    authorName: { type: String, required: true },
    authorPic: { type: String, required: true },
    price: { type: Number, required: true, min: 1, max: 5 },
    duration: { type: Number, required: true, min: 1 },
    likes: { type: Number, default: 0 },
    // hashtags: [{ type: String, required: true, min: 3 }],
    hashtags: { type: Array, required: true, min: 3 },
    comments: [{ user: { type: mongoose.Types.ObjectId, ref: 'user', required: true }, text: { type: String, required: false } }],
    usersLike: [String],
    cityId: { type: mongoose.Types.ObjectId, ref: 'city', required: true }
})

const ItineraryModel = mongoose.model('itinerary', itinerarySchema)
module.exports = ItineraryModel

