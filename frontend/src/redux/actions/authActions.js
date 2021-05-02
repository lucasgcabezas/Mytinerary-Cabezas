import axios from 'axios'
import { store } from 'react-notifications-component'


const authActions = {
    signUpUser: (user) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/user/signup', user)
                if (response.data.errorsValidator) {
                    return response.data.errorsValidator

                } else if (response.data.error) {
                    store.addNotification({
                        title: "Error",
                        message: response.data.error,
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__flipInX"],
                        animationOut: ["animate__animated", "animate__fadeOutDown"],
                        dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
                    })

                } else {
                    dispatch({ type: 'LOG_USER', payload: response.data.response })
                    store.addNotification({
                        title: response.data.response.firstName,
                        message: `Welcome to Mytinerary!`,
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__flipInX"],
                        animationOut: ["animate__animated", "animate__fadeOutDown"],
                        dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
                    })
                }
            } catch {
                store.addNotification({
                    title: "Error",
                    message: "Internal server error, please try later!",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__flipInX"],
                    animationOut: ["animate__animated", "animate__fadeOutDown"],
                    dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
                })
            }
        }
    },

    signInUSer: (userToSignIn) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/user/signin', userToSignIn)
                if (!response.data.success) {
                    store.addNotification({
                        title: "Oops",
                        message: response.data.error,
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__flipInX"],
                        animationOut: ["animate__animated", "animate__fadeOutDown"],
                        dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
                    })

                } else {
                    dispatch({ type: 'LOG_USER', payload: response.data.response })
                    store.addNotification({
                        title: response.data.response.firstName,
                        message: `Welcome to Mytinerary!`,
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__flipInX"],
                        animationOut: ["animate__animated", "animate__fadeOutDown"],
                        dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
                    })
                }
            } catch {
                store.addNotification({
                    title: "Error",
                    message: "Internal server error, please try later!",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__flipInX"],
                    animationOut: ["animate__animated", "animate__fadeOutDown"],
                    dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
                })
            }
        }
    },

    signInLocalStorage: (userLocalStorage) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('http://localhost:4000/api/user/signinls', {
                    headers: { 'Authorization': 'Bearer ' + userLocalStorage.token }
                })
                dispatch({ type: 'LOG_USER', payload: { ...response.data.response, token: userLocalStorage.token } })

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

    getCountries: () => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('https://restcountries.eu/rest/v2/all')
                return response.data

            } catch {
                store.addNotification({
                    title: "Error",
                    message: "Internal server error, please try later!",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__flipInX"],
                    animationOut: ["animate__animated", "animate__fadeOutDown"],
                    dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
                })
            }
        }
    }
}

export default authActions