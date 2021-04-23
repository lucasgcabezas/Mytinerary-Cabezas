const CityModel = require('../models/CityModel')

const citiesControllers = {
    allCities: async (req, res) => {
        try {
            const totalCities = await CityModel.find()
            res.json({ success: true, answer: totalCities })
        } catch (error) {
            res.json({ success: false, answer: 'An error occurred while processing your request' })
            console.log('The controller allCities has failed')
        }
    },

    addNewCity: async (req, res) => {
        try {
            const cityToSave = new CityModel(req.body)
            await cityToSave.save()
            const totalCities = await CityModel.find()
            res.json({ success: true, answer: totalCities })
        } catch (error) {
            res.json({ success: false, answer: 'An error occurred while processing your request'  })
            console.log('The controller addNewCity has failed')
        }
    },

    obtainOneCity: async (req, res) => {
        try {
            const oneCity = await CityModel.findById(req.params.id)
            res.json({ success: true, answer: oneCity })
        } catch (error) {
            res.json({ success: false, answer: 'An error occurred while processing your request'  })
            console.log('The controller obtainCityModel has failed')
        }
    },

    deleteCity: async (req, res) => {
        try {
            const deletedCity = await CityModel.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true, answer: deletedCity })
        } catch (error) {
            res.json({ success: false, answer: 'An error occurred while processing your request'  })
            console.log('The controller deleteCity has failed')
        }
    },

    updateCity: async (req, res) => {
        try {
            const updatedCity = await CityModel.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
            res.json({ success: true, answer: updatedCity })
        } catch (error) {
            res.json({ success: false, answer: 'An error occurred while processing your request'  })
            console.log('The controller updateCity has failed')
        }
    }
}

module.exports = citiesControllers