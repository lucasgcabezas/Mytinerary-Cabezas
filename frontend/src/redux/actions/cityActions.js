import axios from 'axios'
import api from '../../utils/api'

const cityActions = {
    allCities: () => {
        return (dispatch, getState) => {
            axios.get(api +'/cities')
                .then(response => {
                    if (response.data.success) {
                        dispatch({
                            type: 'ALL_CITIES', payload: { citiesArray: response.data.response, citiesFiltered: response.data.response, loading: false, error: false }
                        })
                    } else {
                        dispatch({ type: 'ERROR_CITY', payload: true })
                    }
                })
                .catch(error => dispatch({ type: 'ERROR_CITY', payload: true }))
        }
    },

    filterCity: (inputValue) => {
        return (dispatch, getState) => {
            dispatch({ type: 'FILTER_CITY', payload: inputValue })
        }
    }
}

export default cityActions
