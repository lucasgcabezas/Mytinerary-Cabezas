import { useState } from 'react'
import { connect } from 'react-redux'
import commentActions from '../redux/actions/commentActions'


const Comment = (props) => {

    const { comment, setCommentsState, deleteComment, editComment, userLogged } = props
    const { _id, userName, userPic, text } = comment

    const [messageComment, setMessageComment] = useState({ text: text })

    const getInput = (e) => {
        setMessageComment({ text: e.target.value })
    }

    // console.log(messageComment)


    const sendDeleteComment = async () => {
        let commentsFiltered = await deleteComment(userLogged.token, _id)
        setCommentsState(commentsFiltered)
    }

    const confimrEditComment = async () => {
        let commentsModified = await editComment(userLogged.token, _id, messageComment)
        setCommentsState(commentsModified)
    }


    return (
        <div className="comment">
            {/* <span>{userPic}</span> */}
            <span>{userName}</span>
            <div>
                <p>{text}</p>
                <textarea value={messageComment.text} onChange={getInput}>Hola</textarea>
            </div>
            <button onClick={sendDeleteComment}>Delete</button>
            <button onClick={confimrEditComment}>Edit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    deleteComment: commentActions.deleteComment,
    editComment: commentActions.editComment


}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)



