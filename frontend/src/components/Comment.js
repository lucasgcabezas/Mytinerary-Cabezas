import { useState } from 'react'
import { connect } from 'react-redux'
import commentActions from '../redux/actions/commentActions'


const Comment = (props) => {

    const { comment, setCommentsState, deleteComment, editComment, userLogged, userChecked } = props
    const { _id, userName, userPic, text } = comment

    const [messageComment, setMessageComment] = useState({ text: text })
    const [editTrigger, setEditTrigger] = useState(false)

    let triggerStyle = editTrigger ? 'block' : 'none'

    const getInput = (e) => { setMessageComment({ text: e.target.value }) }

    let userOwner = userChecked.some(commentId => commentId === _id)

    const sendDeleteComment = async () => {
        let commentsFiltered = await deleteComment(userLogged.token, _id)
        setCommentsState(commentsFiltered)
    }

    const confimrEditComment = async () => {
        let commentsModified = await editComment(userLogged.token, _id, messageComment)
        setCommentsState(commentsModified)
        setEditTrigger(false)
    }


    return (
        <div className="comment">
            {/* <span>{userPic}</span> */}
            <span>{userName}</span>
            <div>
                <p style={{ display: editTrigger ? 'none' : 'block' }}>{text}</p>
                <textarea value={messageComment.text} onChange={getInput} style={{ display: triggerStyle }}>Hola</textarea>
            </div>
            <div style={{ display: userOwner ? 'block' : 'none' }}>
                <button onClick={sendDeleteComment}>Delete</button>
                <button onClick={() => setEditTrigger(!editTrigger)}>Edit</button>
                <button onClick={confimrEditComment} style={{ display: triggerStyle }}>Confirm Edit</button>
            </div>
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



