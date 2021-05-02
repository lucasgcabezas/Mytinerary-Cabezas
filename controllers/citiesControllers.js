const CityModel = require('../models/CityModel')

const citiesControllers = {
    allCities: async (req, res) => {
        try {
            const totalCities = await CityModel.find()
            res.json({ success: true, response: totalCities })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request' })
            console.log('The controller allCities has failed')
        }
    },

    addNewCity: async (req, res) => {
        try {
            const cityToSave = new CityModel(req.body)
            await cityToSave.save()
            const totalCities = await CityModel.find()
            res.json({ success: true, response: totalCities })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request'  })
            console.log('The controller addNewCity has failed')
        }
    },

    obtainOneCity: async (req, res) => {
        try {
            const oneCity = await CityModel.findById(req.params.id)
            res.json({ success: true, response: oneCity })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request'  })
            console.log('The controller obtainCityModel has failed')
        }
    },

    deleteCity: async (req, res) => {
        try {
            const deletedCity = await CityModel.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true, response: deletedCity })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request'  })
            console.log('The controller deleteCity has failed')
        }
    },

    updateCity: async (req, res) => {
        try {
            await CityModel.findByIdAndUpdate({ _id: req.params.id }, req.body , { new: true })
            const totalCities = await CityModel.find()
            res.json({ success: true, response: totalCities })
        } catch (error) {
            res.json({ success: false, response: 'An error occurred while processing your request'  })
            console.log('The controller updateCity has failed')
        }
    }
}

module.exports = citiesControllers