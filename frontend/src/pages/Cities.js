import React from 'react'

import Header from '../components/Header'
import MainCities from '../components/MainCities'
import Footer from '../components/Footer'


class Cities extends React.Component {

    render() {
        return (
            <>
                <Header />
                <div className="citiesHero" style={{ backgroundImage: "url('/assets/cities.jpg')" }}>
                    <div className="logo">
                        <div className="logo-img" style={{ backgroundImage: "url('/assets/logotype.png')" }}></div>
                    </div>
                </div>
                <MainCities />
                <Footer />
            </>
        )
    }
}

export default Cities

