import axios from 'axios'

const authActions = {
    signUpUser:  (newUser) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/signup', newUser)
            // if (!respuesta.data.success) {
            //     return respuesta.data.errores
            // }
            dispatch({
                type: 'LOG_USER',
                payload: response.data.success ? response.data.response : null
            })
        }
    },

    signInUSer: (userToSignIn) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/signin', userToSignIn)
            dispatch({
                type: 'LOG_USER', 
                payload: response.data.success ? response.data.response : null})
        }
    },

    signOut: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOGOUT_USER'})
        }
    },

    signInLocalStorage: (userLocalStorage) => {
        return (dispatch, getState) => {
            dispatch({type: 'LOG_USER', payload: userLocalStorage})
        }
    },

    // fetchearPaises: () => {
    //     return async (dispatch, getState) => {
    //         const respuesta = await axios.get('https://restcountries.eu/rest/v2/all')
    //         return respuesta.data
    //     }
    // }
}

export default authActions