import City from './City'

import React from 'react'

const Slide = ({citiesGroup}) => {
    return (
        <div className="carousel-cell">
            {citiesGroup.map(oneCity=> {
                            return <City key={oneCity.id} oneCity={oneCity}/>
            })}
        </div>
    )
}

export default Slide
