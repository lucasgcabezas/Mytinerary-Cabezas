import axios from 'axios'
import api from '../../utils/api'

const adminActions = {

    getAllElements: (route) => {
        return (dispatch, getState) => {
            axios.get(api + `/${route}`)
                // .then(response => console.log(response.data.response))
                .then(response => dispatch({ type: 'GET_ELEMENTS', payload: { arrayOf: response.data.response, preloader: false } }))
        }
    },

    sendNewElement: (route, newElement) => {
        return (dispatch, getState) => {
            axios.post(api + `/${route}`, newElement)
                .then(response => dispatch({ type: 'ADD_ELEMENT', payload: { arrayOf: response.data.response } }))
        }
    },

    deleteElement: (route, idElementDelete) => {
        return (dispatch, getState) => {
            axios.delete(api + `/${route}/${idElementDelete}`)
                .then(response => { dispatch({ type: 'DELETE_ELEMENT', payload: response.data.response }) })
        }
    },

    modifyElement: (route, idElementModify, elementsToModify) => {
        return (dispatch, getState) => {
            axios.put(api + `/${route}/${idElementModify}`, elementsToModify)
                .then(response => { dispatch({ type: 'MODIFY_ELEMENT', payload: response.data.response }) })
        }
    },

    cleanAdminStore: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'CLEAN', payload: { arrayOf: [], preloader: true, citiesArrayOrItineraries: [], preloaderCityOrIti: true } })
        }
    },

    getForSelect: (route) => {
        return (dispatch, getState) => {
            axios.get(api + `/${route}`)
                .then(response => dispatch({ type: 'ALL_CITIES_OR_ITINERARIES', payload: { citiesArrayOrItineraries: response.data.response, preloaderCityOrIti: false, preloader: false } }))
        }
    },
}
export default adminActions
