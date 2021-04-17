const OneCity = require('../models/OneCity')

const citiesControllers = {
    allCities: async (req, res) => {
        const totalCities = await OneCity.find()
        res.json({ success: true, answer: totalCities })
    },

    addNewCity: async (req, res) => {
        const { name, country, img, phrase } = req.body
        const cityToSave = new OneCity({ name: name, country: country, img: img, phrase: phrase })
        await cityToSave.save()
        const totalCities = await OneCity.find()
        res.json({ success: true, answer: totalCities })
    },

    obtainOneCity: async (req, res) => {
        const id = req.params.id
        const oneCity = await OneCity.findById(id)
        res.json({ success: true, answer: oneCity })
    },

    deleteCity: async (req, res) => {
        const id = req.params.id
        const deletedCity = await OneCity.findOneAndDelete({ _id: id })
        res.json({ success: true, answer: deletedCity })
    },

    updateCity: async (req, res) => {
        const id = req.params.id
        const updatedCity = await OneCity.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        res.json({ success: true, answer: updatedCity })
    }
}

module.exports = citiesControllers