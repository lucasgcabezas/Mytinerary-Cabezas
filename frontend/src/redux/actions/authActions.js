import axios from 'axios'

const authActions = {
    signUpUser: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/signup', user)
            if (!response.data.success) {
                return response.data.errores
            } else {
                dispatch({ type: 'LOG_USER', payload: response.data.success ? response.data.response : null })
            }
        }
    },

    signInUSer: (userToSignIn) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/user/signin', userToSignIn)
            dispatch({ type: 'LOG_USER', payload: response.data.success ? response.data.response : null })
        }
    },

    signInLocalStorage: (userLocalStorage) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('http://localhost:4000/api/user/signinls', {
                    headers: { 'Authorization': 'Bearer ' + userLocalStorage.token }
                })

                dispatch({
                    type: 'LOG_USER', payload: { ...response.data.response, token: userLocalStorage.token }
                })

            } catch (err) {
                if (err.response.status === 401) {
                    alert("Me parece que me estás queriendo cagar con un token falso...")
                }
            }
        }
    },

    signOut: () => {
        return async (dispatch, getState) => {
            dispatch({ type: 'LOGOUT_USER' })
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