const mongoose = require('mongoose')

// Se instancia la clase mongoose en una nueva variable citySchema, en el metodo Schema se define un objeto con la estructura que tendra el modelo
const citySchema = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    img: {type: String, required: true},
    phrase: {type: String, required: true}
})

// Se asigna a la variable oneCity con el metodo model de la clase mongoose, el nombre en singular de cada modelo y la estructura definida previamente
const OneCity = mongoose.model('city', citySchema)
module.exports = OneCity

