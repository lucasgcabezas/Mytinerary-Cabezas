const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    img: { type: String, required: true },
    phrase: { type: String, required: true }
})

const CityModel = mongoose.model('city', citySchema)
module.exports = CityModel

