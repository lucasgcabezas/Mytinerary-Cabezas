const OneCity = require('../models/OneCity')

const citiesControllers = {

    // Controlador que responde con todos los objetos de la db
    allCities: async (req, res) => {
        try {
            const totalCities = await OneCity.find()
            res.json({ success: true, answer: totalCities })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    },

    addNewCity: async (req, res) => {
        // const { name, country, img, phrase } = req.body
        // const cityToSave = new OneCity({ name: name, country: country, img: img, phrase: phrase })
        try {
            const cityToSave = new OneCity(req.body)
            await cityToSave.save()
            const totalCities = await OneCity.find()
            // hacer modificacion en frontend con spread
            res.json({ success: true, answer: totalCities })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    },

    obtainOneCity: async (req, res) => {
        // const id = req.params.id
        // const oneCity = await OneCity.findById(id)
        try {
            const oneCity = await OneCity.findById(req.params.id)
            res.json({ success: true, answer: oneCity })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    },

    deleteCity: async (req, res) => {
        // const id = req.params.id
        // const deletedCity = await OneCity.findOneAndDelete({ _id: id })
        try {
            const deletedCity = await OneCity.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true, answer: deletedCity })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    },

    updateCity: async (req, res) => {
        // const id = req.params.id
        // const updatedCity = await OneCity.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
        try {
            const updatedCity = await OneCity.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
            res.json({ success: true, answer: updatedCity })
        } catch (error) {
            res.json({ success: false, answer: 'Ha ocurrido un error' })
        }
    }
}

module.exports = citiesControllers