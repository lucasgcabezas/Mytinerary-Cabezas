import React from 'react'
import { Link } from 'react-router-dom'

const City = ({ city: { name, img, country, phrase, _id } }) => {
    return (
        <Link to={`/itineraries/${_id}`}>
            <div className="cardCity" style={{ backgroundImage: `url('./assets/${img}')` }}>
                <div>
                    <span>{phrase}</span>
                    <span>
                        <span>{name + ', '}</span>
                        <span style={{ fontWeight: '600' }}>{country}</span>
                    </span>
                </div>
                <p>{name}</p>
            </div>
        </Link>

    )
}
export default City