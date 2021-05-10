const initialState = {
    arrayOf: [],
    citiesArrayOrItineraries: [],
    preloader: true,
    preloaderCityOrIti: true
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ELEMENTS':
            return { ...state, ...action.payload }
            break

        case 'ADD_ELEMENT':
            return { ...state, ...action.payload }
            break

        case 'DELETE_ELEMENT':
            return {
                ...state,
                arrayOf: state.arrayOf.filter(city => city._id !== action.payload._id)
            }
            break

        case 'MODIFY_ELEMENT':
            return {
                ...state,
                arrayOf: action.payload
            }
            break

        case 'ALL_CITIES_OR_ITINERARIES':
            return { ...state, ...action.payload }
            break

        case 'CLEAN':
            return {...state, ...action.payload}
            break

        default:
            return state
    }
}


export default adminReducer