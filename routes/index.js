const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

const { allCities, addNewCity, obtainOneCity, deleteCity, updateCity } = citiesControllers

router.route('/cities')
    .get(allCities)
    .post(addNewCity)

router.route('/city/:id')
    .get(obtainOneCity)
    .delete(deleteCity)
    .put(updateCity)

module.exports = router
