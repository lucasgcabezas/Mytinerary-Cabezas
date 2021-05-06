import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import commentActions from '../redux/actions/commentActions'
import itineraryActions from '../redux/actions/itineraryActions'
import Comment from './Comment'

const Itinerary = (props) => {

    const { itinerary, sendNewComment, userLogged, likeItinerary, checkUser, getActivities } = props
    const { _id, title, authorName, authorPic, price, duration, likes, hashtags, img, comments } = itinerary

    const [userChecked, setUserChecked] = useState([])
    const [cardTrigger, setCardTrigger] = useState(false)
    const [angleToApply, setAngleToApply] = useState(0)
    const [itineraryLike, setItineraryLike] = useState({ likesCount: likes, liked: false, repeatLikeFilter: false })
    const [commentsState, setCommentsState] = useState(comments)
    const [commentText, setCommentText] = useState({ text: '' })
    const [activitiesState, setActivitiesState] = useState({
        activities: [],
        preloader: true
    })


    let heartIconClass = itineraryLike.liked ? "fas fa-heart heart" : "far fa-heart heart"

    useEffect(() => {
        checkOwnerUser()
    }, [])

    const checkOwnerUser = async () => {
        // CACHEOS
        if (userLogged) {
            const response = await checkUser(_id, userLogged)
            setUserChecked(response.arrayOwnerCheck)
            if (response.likedChek) {
                setItineraryLike({ ...itineraryLike, liked: true })
            }
        }
    }

    const getInput = (e) => { setCommentText({ text: e.target.value }) }

    const viewMoreLess = async () => {
        setCardTrigger(!cardTrigger)
        const response = await getActivities(_id)
        setActivitiesState({ activities: response, preloader: false })
    }

    const sendIikeItinerary = async () => {
        // CACHEOS
        if (!itineraryLike.repeatLikeFilter && userLogged) {
            await setItineraryLike({ ...itineraryLike, repeatLikeFilter: true, liked: true })
            const response = await likeItinerary(_id, userLogged)
            setItineraryLike({ likesCount: response.likes, liked: response.liked, repeatLikeFilter: false })
        } else if (!userLogged) {
            alert('registrate')
        }
    }

    const sendComment = async () => {
        // CACHEOS
        if (userLogged && commentText.text.length > 0 ) {
            let newComments = await sendNewComment(userLogged.token, _id, commentText)
            setCommentsState(newComments.response)
            setCommentText({ text: '' })
            setUserChecked(newComments.arrayOwnerCheck)
        } else {
            alert('te tenes que registrar pa')
        }
    }

    const positionMouse = (e) => {
        let actualposition = e.pageX
        switch (actualposition > 200 && actualposition < 1150) {

            case actualposition > 220 && actualposition < 230:
                setAngleToApply(-4)
                break;

            case actualposition > 300 && actualposition < 330:
                setAngleToApply(-3)
                break;

            case actualposition > 400 && actualposition < 430:
                setAngleToApply(-2)
                break;

            case actualposition > 500 && actualposition < 530:
                setAngleToApply(-1)
                break;

            case actualposition > 600 && actualposition < 630:
                setAngleToApply(0)
                break;

            case actualposition > 700 && actualposition < 730:
                setAngleToApply(1)
                break;

            case actualposition > 800 && actualposition < 830:
                setAngleToApply(2)
                break;

            case actualposition > 900 && actualposition < 930:
                setAngleToApply(3)
                break;

            case actualposition > 1000 && actualposition < 1030:
                setAngleToApply(4)
                break;

            default:
                break;
        }

    }

    const counter = element => {
        let arrayElement = []
        for (let i = 0; i < element; i++) { arrayElement.push('e') }
        return arrayElement
    }


    return (
        <div className={cardTrigger ? 'showItinerary' : 'itinerary'}  >
            <div className="info" style={{ backgroundImage: `url('/assets/itineraries/${img}')` }} >
                <div className="mouseMove" style={{ transform: `rotate(${angleToApply}deg)`, transition: '.1s' }} ></div>
                <div className="titleSectionItinerary" onMouseMove={(e) => positionMouse(e)}>
                    <p className="titleItinerary">{title}</p>
                </div>
                <div className="authorItinerary">
                    <div className="authorImg" style={{ backgroundImage: `url(${authorPic})` }}></div>
                    <p>{authorName}</p>
                </div>
                <div className="priceSection">
                    <span className="text">Price:
                    {
                            counter(price).map((c, i) => <span key={i} className="far fa-usd-circle price"></span>)
                        }
                    </span>
                    <span className="text">Duration:
                     {
                            counter(duration).map((c, i) => <span key={i} className="far fa-clock duration"></span>)
                        }
                    </span>
                    <span className="text"><span className={heartIconClass} onClick={sendIikeItinerary}></span>{itineraryLike.likesCount || ''}</span>
                </div>
                <div className="hashtag" >
                    {
                        hashtags.map((hash, index) => <p key={index}>#{hash}</p>)
                    }
                </div>
            </div>
            <div className={cardTrigger ? 'showDivOn' : 'showDivOff'}>
                <div>
                    {
                        activitiesState.preloader
                            ? <span>Cargando...</span>
                            : activitiesState.activities.map(activity => <span>{activity.name}</span>)
                    }
                </div>


                <div className="commentsItinerary">
                    <div>{commentsState.map(comment => {

                        return <Comment key={comment._id} comment={comment} commentsState={commentsState} setCommentsState={setCommentsState} userChecked={userChecked} />
                    })}
                    </div>

                    <div>
                        <input type="text" value={commentText.text} onChange={getInput}></input>
                        <button onClick={sendComment}>Send</button>
                    </div>
                </div>

            </div>

            <div className="buttonShow" onClick={viewMoreLess}>
                {
                    cardTrigger
                        ? <span>View less <span className="fas fa-chevron-circle-up"></span></span>
                        : <span>View more <span className="fas fa-chevron-circle-down"> </span></span>
                }
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
    sendNewComment: commentActions.sendNewComment,
    likeItinerary: itineraryActions.likeItinerary,
    checkUser: itineraryActions.checkUser,
    getActivities: itineraryActions.getActivities
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
