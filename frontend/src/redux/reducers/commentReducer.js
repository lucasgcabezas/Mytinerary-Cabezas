const initialState = {
    allComments: [],
    idItineraryOfComments: '',
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log(action.payload)
            return action.payload 
            break

        default:
            return state
    }
}


export default commentReducer