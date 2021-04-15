import React from 'react'
import { NavLink } from 'react-router-dom'

const City = ({ city: { name, img, country, phrase, id } }) => {
    return (
        <NavLink to={`/itineraries/${id}/${name}/${img}`}>
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
        </NavLink>

    )
}
export default City