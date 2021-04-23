import React, { useState } from 'react'


const Itinerary = ({ itinerary: { title, authorName, authorPic, price, duration, likes, hashtags } }) => {

    const [showMore, setShowMore] = useState({ visible: false })

    const counter = element => {
        let contador = 0
        let arrayPrice = []
        while (contador < element) {
            arrayPrice.push('e')
            contador = contador + 1
        }
        return arrayPrice
    }

    return (
        <div className={showMore.visible ? 'showItinerary' : 'itinerary'}>
            <p>{title}</p>
            <p>{authorPic}</p>
            <p>{authorName}</p>
            <div>
                <p>Price: {counter(price).map(c => 'b')} </p>
                <p>Duration: {counter(duration).map(c => 'b')} </p>
                {/* <p>{duration} Hours</p> */}
                <p>Likes: {likes || ''}</p>
            </div>
            <div>
                {
                    hashtags.map((hash, index) => <p key={index}>#{hash}</p>)
                }
            </div>
            <div style={{ display: showMore.visible ? 'block' : 'none' }}>
                <p>Hola Hola Hola Hola Hola </p>
            </div>

            <button onClick={() => setShowMore({ visible: !showMore.visible })}>{showMore.visible ? 'View less ' : 'View more'}</button>

            {/* <p>{comments.map(comment => `#${comment}`)}</p> */}
            {/* <p>{usersLike}</p> */}
            {/* <p className="underConstruction">{infoCity.city.name} itineraries are under construction!</p> */}

        </div>
    )
}

export default Itinerary