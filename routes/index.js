const express = require('express')
const router = express.Router()

const validator = require('../config/validator')
const passport = require('passport')

const citiesControllers = require('../controllers/citiesControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const usersControllers = require('../controllers/usersControllers')
const commentsControllers = require('../controllers/commentsControllers')
const activityControllers = require('../controllers/activitesControllers')


const { allCities, addNewCity, obtainOneCity, deleteCity, updateCity } = citiesControllers
const { allItineraries, addNewItinerary, deleteItinerary, obtainOneItinerary, itinerariesForCity, updateItinerary, likeItinerary, checkUserLogged } = itineraryControllers
const { signUp, signIn, signInForLS } = usersControllers
const { addNewComment, deleteComment, editComment } = commentsControllers
const { addNewActivity, activityForItinerary } = activityControllers


// CITIES
router.route('/cities')
    .get(allCities)
    .post(addNewCity)

router.route('/city/:id')
    .get(obtainOneCity)
    .delete(deleteCity)
    .put(updateCity)

// ITINERARIES
router.route('/itineraries')
    .get(allItineraries)
    .post(addNewItinerary)

router.route('/itineraries/:id')
    .get(itinerariesForCity)

router.route('/itinerary/:id')
    .get(obtainOneItinerary)
    .delete(deleteItinerary)
    .put(updateItinerary)

// ACTIVITIES
router.route('/activities')
    .post(addNewActivity)

router.route('/activities/:id')
    .get(activityForItinerary)




router.route('/checkuser/:id')
    .get(passport.authenticate('jwt', { session: false }), checkUserLogged)
//CORREGIR COMPROBACION

router.route('/like/:id')
    .get(passport.authenticate('jwt', { session: false }), likeItinerary)



    
// ITINERARIES
router.route('/comments/:id')
    .post(passport.authenticate('jwt', { session: false }), addNewComment)

router.route('/comment/:id')
    .delete(passport.authenticate('jwt', { session: false }), deleteComment)
    .put(passport.authenticate('jwt', { session: false }), editComment)

// USERS 
router.route('/user/signup')
    .post(validator, signUp)

router.route('/user/signin')
    .post(signIn)

router.route('/user/signinls')
    .get(passport.authenticate('jwt', { session: false }), signInForLS)

module.exports = router
