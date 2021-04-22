import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import cityActions from '../redux/actions/cityActions'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Itinerary from '../components/Itinerary'
import Footer from '../components/Footer'


const Itineraries = (props) => {

    useEffect(() => { props.oneCityId(props.match.params.id) }, [])

    var headerItineraries = true

    return (
        <>
            <Header headerItineraries={headerItineraries} />
            <div className="itinerariesContainer" >
                <div className="cityItinerariesHero" style={{ backgroundImage: `url('/assets/${props.oneCity.img}')` }}>
                    <p className="cityTitle"> {props.oneCity.name}</p>
                </div>
                <Itinerary />
                <div className="cta-plane">
                    <Link to="/cities"><button className="cta"><p>Back to Cities</p></button></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        oneCity: state.cityReducer.city
    }
}

const mapDispatchToProps = {
    oneCityId: cityActions.oneCity
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
