import axios from 'axios'
import { store } from 'react-notifications-component'

const myAlert = async (alertTitle, alertMessage, alertType) => {
    await store.addNotification({
        title: alertTitle,
        message: alertMessage,
        type: alertType,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__flipInX"],
        animationOut: ["animate__animated", "animate__fadeOutDown"],
        dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
    })
}

const itineraryActions = {
    getItineraries: (cityId) => {
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/itineraries/' + cityId)
                .then(response => {
                    if (response.data.success) {
                        dispatch({ type: 'GET_ITINERARIES', payload: { selectedItineraries: response.data.response, error: false, preloader: false } })
                    } else {
                        dispatch({ type: 'ERROR_ITINERARY', payload: { error: true, preloader: false } })
                    }
                })
                .catch(error => myAlert('Error', 'An error happened, please reload the page!', 'danger'))
        }
    },

    getOneCity: (cityId) => {
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/city/' + cityId)
                .then(response => {
                    if (response.data.success) {
                        dispatch({ type: 'GET_ONECITY', payload: { oneCity: response.data.response, error: false, preloader: false } })
                    } else {
                        dispatch({ type: 'ERROR_ITINERARY', payload: { error: true, preloader: false } })
                    }
                })
                .catch(error => myAlert('Error', 'An error happened, please reload the page!', 'danger'))
        }
    },

    removeItineraries: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'REMOVE_ITINERARIES', payload: { selectedItineraries: [], preloader: true } })
        }
    },

    checkUser: (itineraryId, user) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('http://localhost:4000/api/checkuser/' + itineraryId, {
                    headers: { 'Authorization': 'Bearer ' + user.token }
                })
                if (response.data.success) {
                    return response.data.response
                } else {
                    myAlert('Error', response.data.error, 'danger')
                }
            } catch (error) {
                myAlert('Error', 'Internal server error, please try later!', 'danger')
            }
        }
    },

    likeItinerary: (itineraryId, user) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('http://localhost:4000/api/like/' + itineraryId, {
                    headers: { 'Authorization': 'Bearer ' + user.token }
                })
                if (response.data.success) {
                    return response.data.response
                } else {
                    myAlert('Error', response.data.error, 'danger')
                }
            } catch (error) {
                myAlert('Error', 'Internal server error, please try later!', 'danger')
            }
        }
    },

    getActivities: (itineraryId) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('http://localhost:4000/api/activities/' + itineraryId)
                if (response.data.success) {
                    return response.data.response
                } else {
                    myAlert('Error', response.data.error, 'danger')
                }
            } catch (error) {
                myAlert('Error', 'Internal server error, please try later!', 'danger')
            }
        }
    }
}
export default itineraryActions
