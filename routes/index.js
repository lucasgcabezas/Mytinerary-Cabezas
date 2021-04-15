const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

const {allCities, addNewCity} = citiesControllers


router.route('/cities')
.get(allCities)
.post(addNewCity)

module.exports = router
