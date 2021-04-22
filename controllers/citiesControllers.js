const OneCity = require('../models/OneCity')

const citiesControllers = {
    allCities: async (req, res) => {
        try {
            const totalCities = await OneCity.find()
            res.json({ success: true, answer: totalCities })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    },

    addNewCity: async (req, res) => {
        try {
            const cityToSave = new OneCity(req.body)
            await cityToSave.save()
            const totalCities = await OneCity.find()
            res.json({ success: true, answer: totalCities })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    },

    obtainOneCity: async (req, res) => {
        try {
            const oneCity = await OneCity.findById(req.params.id)
            res.json({ success: true, answer: oneCity })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    },

    deleteCity: async (req, res) => {
        try {
            const deletedCity = await OneCity.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true, answer: deletedCity })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    },

    updateCity: async (req, res) => {
        try {
            const updatedCity = await OneCity.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
            res.json({ success: true, answer: updatedCity })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    }
}

module.exports = citiesControllers