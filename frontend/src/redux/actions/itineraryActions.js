import axios from 'axios'

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
                .catch(error => alert('An error happened, please reload the page!'))
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
                .catch(error => alert('An error happened, please reload the page!'))
        }
    },

    removeItineraries: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'REMOVE_ITINERARIES', payload: { selectedItineraries: [], preloader: true } })
        }
    },

    likeItinerary: (itineraryId, user) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('http://localhost:4000/api/like/' + itineraryId, {
                    headers: { 'Authorization': 'Bearer ' + user.token }
                })
                return response.data.response
            } catch (error) {
                console.log(error)
            }
        }
    }

}
export default itineraryActions
