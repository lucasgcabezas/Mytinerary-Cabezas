const OneCity = require('../models/OneCity')

const citiesControllers = {
    allCities: async (req, res) => {
        const totalCities = await OneCity.find()
        res.json({ success: true, answer: totalCities })
    },

    addNewCity: async (req, res) => {
        const { name, country, img,  phrase} = req.body
        const cityToSave = new OneCity({ name: name, country: country, img: img, phrase: phrase })
        await cityToSave.save()
        const totalCities = await OneCity.find()
        res.json({ success: true, respuesta: totalCities })
    }
}

module.exports = citiesControllers