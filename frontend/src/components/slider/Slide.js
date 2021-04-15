import Card from './Card'
import React from 'react'

const Slide = ({ citiesGroup }) => {
    return (
        <div className="carousel-cell">
            {citiesGroup.map(oneCity => {
                return <Card key={oneCity.id} oneCity={oneCity} />
            })}
        </div>
    )
}
export default Slide
