const initialState = {
    citiesArray: [],
    citiesFiltered: [],
    city: {},
    loading: true
}

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CITIES':
            return { ...state, ...action.payload }
            break
            
        case 'ONE_CITY':
            return {
                ...state,
                city: state.citiesArray.find(city => city._id === action.payload)
            }
            break

        case 'FILTER_CITY':
            return {
                ...state,
                citiesFiltered: state.citiesArray.filter(ciudad => ciudad.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()))
            }
            break

        default:
            return state
    }
}

export default cityReducer