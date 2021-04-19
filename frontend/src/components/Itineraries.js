import React, { useEffect, useState } from 'react'
import Preloader from './Preloader'
import Footer from './Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Itineraries = (props) => {
    const [idCity, setidCity] = useState(props.match.params.id)
    const [infoCity, setInfoCity] = useState({
        loading: true
    })


    useEffect(() => {
        axios.get('http://localhost:4000/api/city/' + idCity)
            .then(response => setInfoCity({ city: response.data.answer, loading: false }))
        // .catch(error => this.props.history.push('/error'))
    }, [])

    if (infoCity.loading) {
        return <Preloader />
    }

    return (
        <>
            <div className="itinerariesContainer" >
                <div className="cityItinerariesHero" style={{ backgroundImage: `url('/assets/${infoCity.city.img}')` }}>
                    <p className="cityTitle"> {infoCity.city.name}</p>
                </div>
                <div className="notCities">
                    <p className="underConstruction">{infoCity.city.name} itineraries are under construction!</p>
                </div>
                <div className="cta-plane">
                    <Link to="/cities"><button className="cta"><p>Back to Cities</p></button></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Itineraries