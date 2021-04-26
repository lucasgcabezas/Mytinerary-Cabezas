import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import itineraryActions from '../redux/actions/itineraryActions'

import Header from '../components/Header'
import Preloader from '../components/Preloader'
import Itinerary from '../components/Itinerary'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'


const Itineraries = (props) => {

    const [cityState, setCityState] = useState({
        oneCity: {},
        preloaderCity: true,
        errorCity: false
    });

    useEffect(() => {
        props.loadSelectedItineraries(props.match.params.id)

        if (props.allCities.length > 0) {
            setCityState({ oneCity: props.allCities.find(city => city._id === props.match.params.id), preloaderCity: false, errorCity: props.errorCity })
        } else {
            props.getOneCity(props.match.params.id)
        }

        return () => { props.removeItineraries() }
    }, [])

    useEffect(() => {
        if (props.oneCityBackup !== undefined && props.allCities.length === 0) {
            setCityState({ ...cityState, oneCity: props.oneCityBackup, preloaderCity: false, errorCity: props.errorCity })
        }
    }, [props.oneCityBackup])

    var headerItineraries = true

    const { oneCity, preloaderCity, errorCity } = cityState

    if (preloaderCity || props.preloaderItinerary) {
        return <Preloader />
    }

    return (
        <>
            <ScrollToTop />
            <Header headerItineraries={headerItineraries} />
            <div className="itinerariesContainer" >
                <div className="cityItinerariesHero" style={{ backgroundImage: `url('/assets/${cityState.oneCity.img}')` }}>
                    <p className="cityTitle"> {oneCity.name}</p>
                </div>
                {
                    errorCity || props.errorItinerary
                        ? <p>A database error happened </p>
                        : props.selectedItineraries.length === 0
                            ? <div className="noItineraries" style={{ backgroundImage: "url('/assets/pattern.png')" }}><div className="divNoItineraries"></div><p>Itineraries have not been added yet!</p><p>Come back soon!</p></div>
                            : props.selectedItineraries.map(itinerary => <Itinerary key={itinerary._id} itinerary={itinerary} />)
                }
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
        allCities: state.cityReducer.citiesArray,
        selectedItineraries: state.itineraryReducer.selectedItineraries,
        preloaderItinerary: state.itineraryReducer.preloader,
        oneCityBackup: state.itineraryReducer.oneCity,
        errorCity: state.cityReducer.error,
        errorItinerary: state.itineraryReducer.error
    }
}

const mapDispatchToProps = {
    loadSelectedItineraries: itineraryActions.getItineraries,
    getOneCity: itineraryActions.getOneCity,
    removeItineraries: itineraryActions.removeItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
