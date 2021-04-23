import axios from 'axios'

const itineraryActions = {
    getItineraries: (cityId) => {
        return (dispatch, getState) => {
            // localhost
            axios.get('http://192.168.0.143:4000/api/itineraries/' + cityId)
                .then(response => dispatch({
                    type: 'GET_ITINERARIES', payload: { selectedItineraries: response.data.response, error: false, preloader: false }
                }))
                .catch(dispatch({ type: 'ERROR_ITINERARY', payload: true }))
                // .catch(console.log('CAE AL CATCH ITINERARY'))
                
            // console.log('pudimos importar todas los itineraries! -itinerariesActions-')
        }
    },

    removeItineraries: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'REMOVE_ITINERARIES', payload: [] })
        }
    }
}
export default itineraryActions
