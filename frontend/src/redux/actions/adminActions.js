import axios from 'axios'

const adminActions = {

    getCities: () => {
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/cities')
                .then(response => dispatch({ type: 'GET_CITIES', payload: { arrayOf: response.data.answer, preloader: false } }))
        }
    },

    sendNewCity: (newElement) => {
        return (dispatch, getState) => {
            axios.post('http://localhost:4000/api/cities', newElement)
                .then(response => dispatch({ type: 'ADD_CITY', payload: { arrayOf: response.data.answer } }))
        }
    },

    deleteCity: (idCitydelete) => {
        return (dispatch, getState) => {
            axios.delete('http://localhost:4000/api/city/' + idCitydelete)
                // .then(response => console.log(response.data.answer))
                .then(response => { dispatch({ type: 'DELETE_CITY', payload: response.data.answer }) })
        }
    }
}
export default adminActions
