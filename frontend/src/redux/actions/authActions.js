import axios from 'axios'
import { store } from 'react-notifications-component'
import api from '../../utils/api'

const myAlert = async (alertTitle, alertMessage, alertType) => {
    await store.addNotification({
        title: alertTitle,
        message: alertMessage,
        type: alertType,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__flipInX"],
        animationOut: ["animate__animated", "animate__fadeOutDown"],
        dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
    })
}

const authActions = {
    signUpUser: (user) => {
        return async (dispatch, getState) => {

            try {
                const response = await axios.post(api + '/user/signup', user)
                if (response.data.errorsValidator) {
                    return response.data.errorsValidator

                } else if (response.data.error) {
                    myAlert('Error', response.data.error, 'danger')

                } else {
                    dispatch({ type: 'LOG_USER', payload: response.data.response })
                    myAlert(response.data.response.firstName, `Welcome to Mytinerary!`, 'success')
                }
            } catch {
                myAlert('Error', 'Internal server error, please try later!', 'danger')

            }
        }
    },

    signInUSer: (userToSignIn) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post(api + '/user/signin', userToSignIn)
                if (!response.data.success) {
                    myAlert('Oops', response.data.error, 'danger')
                } else {
                    dispatch({ type: 'LOG_USER', payload: response.data.response })
                    myAlert(response.data.response.firstName, `Welcome to Mytinerary!`, 'success')
                }
            } catch {
                myAlert('Error', 'Internal server error, please try later!', 'danger')
            }
        }
    },

    signInLocalStorage: (userLocalStorage) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get(api + '/user/signinls', {
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
            myAlert('Goodbye!', 'Hope to see you soon!', 'info')
            dispatch({ type: 'LOGOUT_USER' })

        }
    },

    getCountries: () => {
        return async (dispatch, getState) => {
            try {
                // const response = await axios.get('https://restcountries.com/v3.1/all')

                // console.log(response)
                return ['Argentina', 'Brazil', 'Uruguay', 'Colombia', 'Chile', 'Venezuela']

            } catch {
                myAlert('Error', 'Internal server error, please try later!', 'danger')
            }
        }
    },

    checkAdmin: (user) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get(api + '/checkadmin', {
                    headers: { 'Authorization': 'Bearer ' + user.token }
                })
                dispatch({ type: 'CHECK_ADMIN', payload: response.data.response })
            } catch {

            }
        }
    },
}

export default authActions