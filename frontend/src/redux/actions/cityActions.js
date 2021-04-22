import axios from 'axios'


const cityActions = {
    allCities: () => {
        return (dispatch, getState) => {
            axios.get('http://192.168.0.143:4000/api/cities')
                .then(response => dispatch({ type: 'ALL_CITIES', payload: { citiesArray: response.data.answer, citiesFiltered: response.data.answer, loading: false, } }))
            console.log('pudimos importar')
        }
    },

    oneCity: (id) => {
        return (dispatch, getState) => {
            dispatch({type: 'ONE_CITY', payload: id})
        }
    },

    filterCity: (inputValue) => {
        return (dispatch, getState) => {
            dispatch({type: 'FILTER_CITY', payload: inputValue})
        }
    }
}

export default cityActions


// fetch('https://apipetshop.herokuapp.com/api/articulos')
            // .then(response => response.json())
            // .then(data => dispatch({type: 'CARGAR_ARTICULOS', payload: data.response}))