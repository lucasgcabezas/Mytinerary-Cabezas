import axios from 'axios'

const cityActions = {
    allCities: () => {
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/cities')
                .then(response => {
                    if (response.data.success) {
                        dispatch({
                            type: 'ALL_CITIES', payload: {
                                citiesArray: response.data.answer,
                                citiesFiltered: response.data.answer,
                                loading: false, error: false
                            }
                        })
                    } else {
                        dispatch({ type: 'ERROR_CITY', payload: true })
                    }
                })
            .catch(error => dispatch({ type: 'ERROR_CITY', payload: true }))

            // console.log('pudimos importar todas las cities! -cityActions-')
        }
    },

    filterCity: (inputValue) => {
        return (dispatch, getState) => {
            dispatch({ type: 'FILTER_CITY', payload: inputValue })
        }
    }
}

export default cityActions
