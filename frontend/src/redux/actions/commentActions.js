import axios from 'axios'

const commentActions = {

    sendNewComment: (userToken, itineraryId, commentText) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/comments/' + itineraryId, commentText, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })
                return response.data
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
                return response.data.response
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

                return response.data.response

            } catch {
                console.log('error')
            }
        }
    }

}
export default commentActions
