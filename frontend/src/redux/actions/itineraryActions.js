import axios from 'axios'

const itineraryActions = {
    getItineraries: (cityId) => {
        return (dispatch, getState) => {
            // localhost
            axios.get('http://localhost:4000/api/itineraries/' + cityId)
                .then(response => {
                    if (response.data.success) {
                        dispatch({ type: 'GET_ITINERARIES', payload: { selectedItineraries: response.data.response, error: false, preloader: false } })
                    } else {
                        dispatch({ type: 'ERROR_ITINERARY', payload: { error: true, preloader: false } })
                    }
                })
            .catch(() => alert('Se ha producido un error, por favor recargue la página.'))
        }
    },

    getOneCity: (cityId) => {
        return (dispatch, getState) => {
            // localhost
            axios.get('http://localhost:4000/api/city/' + cityId)
                .then(response => {
                    if (response.data.success) {
                        dispatch({ type: 'GET_ONECITY', payload: { oneCity: response.data.answer, error: false, preloader: false } })
                    } else {
                        dispatch({ type: 'ERROR_ITINERARY', payload: { error: true, preloader: false } })
                    }
                })
        }
    },

    removeItineraries: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'REMOVE_ITINERARIES', payload: { selectedItineraries: [], preloader: true } })
        }
    }
}
export default itineraryActions
