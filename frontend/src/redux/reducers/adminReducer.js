const initialState = {
    arrayOf: [],
    preloader: true,
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CITIES':
            return { ...state, ...action.payload }
            break

        case 'ADD_CITY':
            console.log('reducer:' + action.payload)
            return { ...state, ...action.payload }
            break

        case 'DELETE_CITY':
            console.log('reducer:' + action.payload)
            return {
                ...state,
                arrayOf: state.arrayOf.filter(city => city._id !== action.payload._id)
            }
            break

        default:
            return state
    }
}


export default adminReducer