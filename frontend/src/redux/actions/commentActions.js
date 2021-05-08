import axios from 'axios'
import { store } from 'react-notifications-component'

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

const commentActions = {

    sendNewComment: (userToken, itineraryId, commentText) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/comments/' + itineraryId, commentText, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })
                if (response.data.success) {
                    return response.data
                } else {
                    myAlert('Error', response.data.error, 'danger')
                }
            } catch {
                console.log('error')
            }
        }
    },

    deleteComment: (userToken, commentId) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.delete('http://localhost:4000/api/comment/' + commentId, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })
                if (response.data.success) {
                    return response.data.response
                } else {
                    myAlert('Error', response.data.error, 'danger')
                }
            } catch {
                console.log('error')
            }
        }
    },

    editComment: (userToken, commentId, message) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.put('http://localhost:4000/api/comment/' + commentId, message, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })
                if (response.data.success) {
                    return response.data.response
                } else {
                    myAlert('Error', response.data.error, 'danger')
                }
            } catch {
                console.log('error')
            }
        }
    }

}
export default commentActions
