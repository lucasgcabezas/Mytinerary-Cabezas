import React from 'react'

const City = ({ city }) => {
    return (
        <div className="cardCity">
            <p>{city.name}</p>
        </div>
    )
}
export default City