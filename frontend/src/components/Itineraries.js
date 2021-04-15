import React, { useEffect, useState } from 'react'

const Itineraries = (props) => {

    // const [idCity, setIdCity] = useState(null)
    const [nameCity, setNameCity] = useState(null)
    const [imgCity, setImgCity] = useState(null)

    useEffect(() => {
        // setIdCity(props.match.params.id)
        setNameCity(props.match.params.name)
        setImgCity(props.match.params.img)
    }, [])


    // console.log(props.match.params)

    return (
        <div className="cityItineraries" style={{ backgroundImage: `url('./assets/${imgCity}')` }}>

            <p style={{ color: 'white' }}> {nameCity}</p>


        </div>
    )
}

export default Itineraries