import { useState } from 'react'
import { connect } from 'react-redux'
import commentActions from '../redux/actions/commentActions'


const Comment = (props) => {

    const { comment, setCommentsState, deleteComment, editComment, userLogged, userChecked } = props
    const { _id, userName, userPic, text } = comment

    const [messageComment, setMessageComment] = useState({ text: text })
    const [editTrigger, setEditTrigger] = useState(false)
    const [deleteTrigger, setDeleteTrigger] = useState(false)

    let triggerStyle = editTrigger ? 'block' : 'none'
    let userOwner = userChecked.some(commentId => commentId === _id)


    const getInput = (e) => { setMessageComment({ text: e.target.value }) }

    const sendDeleteComment = async () => {
        setDeleteTrigger(false)
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
            <div className="userPicComment" style={{ backgroundImage: `url(${userPic})` }}></div>
            <div className="commentNameText">
                <span className="commentsUserName">{userName}</span>
                <div>
                    <p style={{ display: editTrigger ? 'none' : 'block' }}>{text}</p>
                    <textarea className="textAreaEditComment" value={messageComment.text} onChange={getInput} style={{ display: triggerStyle }} rows="3">Hola</textarea>
                    <button onClick={confimrEditComment} style={{ display: triggerStyle }}>Confirm</button>
                </div>
            </div>

            <div className="commentsButtons" style={{ display: userOwner ? 'flex' : 'none' }}>
                <span className="fas fa-edit commentEditButton" onClick={() => setEditTrigger(!editTrigger)}></span>
                <span className="fas fa-trash-alt commentDeleteButton" onClick={() => setDeleteTrigger(true)}></span>
            </div>

            <div className={deleteTrigger ? 'deleteCommentModalOpen' : 'deleteCommentModalClose'}>
                <div className="deleteComment">
                    {/* <h4>Delete comment</h4> */}
                    <p>Are you sure you want to delete this comment? This cannot be undone.</p>
                    <div className="deleteCommentButtons">
                        <button onClick={() => setDeleteTrigger(false)}>Cancel</button>
                        <button onClick={sendDeleteComment}>Delete</button>
                    </div>
                </div>
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



