import axios from 'axios'

const commentActions = {

    sendNewComment: (userToken, itineraryId, commentText) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/comments/' + itineraryId, commentText, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })
                return response.data.response
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
                console.log('aca que onda')
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
                }
                )
                return response.data.response
            } catch {
                console.log('error')
            }
        }
    },

    cleanCommentsStore: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'CLEAN_COMMENTS', payload: { allComments: [], idItineraryOfComments: '' } })
        }
    },










    // getItineraries: (cityId) => {
    //     return (dispatch, getState) => {
    //         axios.get('http://localhost:4000/api/itineraries/' + cityId)
    //             .then(response => {
    //                 if (response.data.success) {
    //                     dispatch({ type: 'GET_ITINERARIES', payload: { selectedItineraries: response.data.response, error: false, preloader: false } })
    //                 } else {
    //                     dispatch({ type: 'ERROR_ITINERARY', payload: { error: true, preloader: false } })
    //                 }
    //             })
    //             .catch(error => alert('An error happened, please reload the page!'))
    //     }
    // },

    // getOneCity: (cityId) => {
    //     return (dispatch, getState) => {
    //         axios.get('http://localhost:4000/api/city/' + cityId)
    //             .then(response => {
    //                 if (response.data.success) {
    //                     dispatch({ type: 'GET_ONECITY', payload: { oneCity: response.data.response, error: false, preloader: false } })
    //                 } else {
    //                     dispatch({ type: 'ERROR_ITINERARY', payload: { error: true, preloader: false } })
    //                 }
    //             })
    //             .catch(error => alert('An error happened, please reload the page!'))
    //     }
    // },

    // removeItineraries: () => {
    //     return (dispatch, getState) => {
    //         dispatch({ type: 'REMOVE_ITINERARIES', payload: { selectedItineraries: [], preloader: true } })
    //     }
    // }













}
export default commentActions
