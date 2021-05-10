import axios from 'axios'

const adminActions = {

    getCities: (route) => {
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/' + route)
                // .then(response => console.log(response.data.response))
                .then(response => dispatch({ type: 'GET_CITIES', payload: { arrayOf: response.data.response, preloader: false } }))
        }
    },

    sendNewCity: (route, newElement) => {
        return (dispatch, getState) => {
            axios.post('http://localhost:4000/api/'+ route, newElement)
                .then(response => dispatch({ type: 'ADD_CITY', payload: { arrayOf: response.data.response } }))
        }
    },

    deleteCity: (idElementDelete) => {
        return (dispatch, getState) => {
            axios.delete('http://localhost:4000/api/city/' + idElementDelete)
                .then(response => { dispatch({ type: 'DELETE_CITY', payload: response.data.response }) })
        }
    },

    modifyCity: (idElementModify, elementsToModify) => {
        return (dispatch, getState) => {
            axios.put('http://localhost:4000/api/city/' + idElementModify, elementsToModify)
                .then(response => { dispatch({ type: 'MODIFY_CITY', payload: response.data.response }) })
        }
    },

    cleanAdminStore: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'CLEAN', payload: { arrayOf: [], preloader: true } })
        }
    },

    getAllCities: () => {
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/cities')
                .then(response => dispatch({ type: 'ALL_CITIES', payload: { citiesArray: response.data.response, preloaderCity: false, preloader: false } }))
        }
    },
}
export default adminActions
