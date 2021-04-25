import React, { useState } from 'react'


const Itinerary = ({ itinerary: { title, authorName, authorPic, price, duration, likes, hashtags, img } }) => {

    const [cardTrigger, setCardTrigger] = useState(false)
    const [mouse, setMouse] = useState({
        position: 280,
        angleToApply: -4
    })

    const positionMouse = (e) => {
        let actualposition = e.pageX
        switch (actualposition > 200 && actualposition < 1150) {

            case actualposition > 250 && actualposition < 230:
                setMouse({ position: actualposition, angleToApply: -4 })
                break;

            case actualposition > 300 && actualposition < 330:
                setMouse({ position: actualposition, angleToApply: -3 })
                break;

            case actualposition > 400 && actualposition < 430:
                setMouse({ position: actualposition, angleToApply: -2 })
                break;

            case actualposition > 500 && actualposition < 530:
                setMouse({ position: actualposition, angleToApply: -1 })
                break;

            case actualposition > 600 && actualposition < 630:
                setMouse({ position: actualposition, angleToApply: 0 })
                break;

            case actualposition > 700 && actualposition < 730:
                setMouse({ position: actualposition, angleToApply: 1 })
                break;

            case actualposition > 800 && actualposition < 830:
                setMouse({ position: actualposition, angleToApply: 2 })
                break;

            case actualposition > 900 && actualposition < 930:
                setMouse({ position: actualposition, angleToApply: 3 })
                break;

            case actualposition > 1000 && actualposition < 1030:
                setMouse({ position: actualposition, angleToApply: 4 })
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
        <div className={cardTrigger ? 'showItinerary' : 'itinerary'} onMouseMove={(e) => positionMouse(e)}>

            <div className="info" style={{ backgroundImage: `url('/assets/itineraries/${img}')` }}>
                <div className="mouseMove" style={{ transform: `rotate(${mouse.angleToApply}deg)`, transition: '.1s' }}></div>

                <div className="titleSectionItinerary">
                    <p className="titleItinerary">{title}</p>
                </div>
                <div className="authorItinerary">
                    <div className="authorImg" style={{ backgroundImage: `url(${authorPic})` }}></div>
                    <p>{authorName}</p>
                </div>
                <div className="priceSection">
                    <span className="text">Price: {counter(price).map((c, i) => <span key={i} className="far fa-usd-circle price"></span>)} </span>
                    <span className="text">Duration: {counter(duration).map((c, i) => <span key={i} className="far fa-clock duration"></span>)} </span>
                    <span className="text"><span className="far fa-heart heart"></span>{likes || ''}</span>
                    {/* <i class="fas fa-heart"></i> */}
                </div>
                <div className="hashtag" >
                    {
                        hashtags.map((hash, index) => <p key={index}>#{hash}</p>)
                    }
                </div>
            </div>
            {/* <div className="showDiv" style={{display: showMore.visible ? 'flex' : 'none'}}> */}
            <div className={cardTrigger ? 'showDivOn' : 'showDivOff'}>
                <div className="commentsItinerary">
                    <p>The section is under contruction!</p>
                </div>
            </div>
            <div className="buttonShow" onClick={() => setCardTrigger(!cardTrigger)}>
                {
                    cardTrigger
                        ? <span>View less <span className="fas fa-chevron-circle-up"></span></span>
                        : <span>View more <span className="fas fa-chevron-circle-down"> </span></span>
                }
            </div>
            {/* <p>{comments.map(comment => `#${comment}`)}</p> */}
            {/* <p>{usersLike}</p> */}
            {/* <p className="underConstruction">{infoCity.city.name} itineraries are under construction!</p> */}
        </div>
    )
}

export default Itinerary