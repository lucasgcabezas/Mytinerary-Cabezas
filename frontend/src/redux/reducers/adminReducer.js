const initialState = {
    arrayOf: [],
    citiesArray: [],
    preloader: true,
    preloaderCity: true
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CITIES':
            return { ...state, ...action.payload }
            break

        case 'ADD_CITY':
            return { ...state, ...action.payload }
            break

        case 'DELETE_CITY':
            return {
                ...state,
                arrayOf: state.arrayOf.filter(city => city._id !== action.payload._id)
            }
            break

        case 'MODIFY_CITY':
            return {
                ...state,
                arrayOf: action.payload
            }
            break

        case 'ALL_CITIES':
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