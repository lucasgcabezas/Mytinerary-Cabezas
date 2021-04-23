const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itineraryControllers = require('../controllers/itineraryControllers')

const { allCities, addNewCity, obtainOneCity, deleteCity, updateCity } = citiesControllers
const { allItineraries, addNewItinerary, deleteItinerary, obtainOneItinerary, itinerariesForCity, updateItinerary } = itineraryControllers

router.route('/cities')
    .get(allCities)
    .post(addNewCity)

router.route('/city/:id')
    .get(obtainOneCity)
    .delete(deleteCity)
    .put(updateCity)

router.route('/itineraries')
    .get(allItineraries)
    .post(addNewItinerary)

router.route('/itineraries/:id')
    .get(itinerariesForCity)

router.route('/itinerary/:id')
    .get(obtainOneItinerary)
    .delete(deleteItinerary)
    .put(updateItinerary)

module.exports = router
