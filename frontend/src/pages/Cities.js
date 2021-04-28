import React from 'react'

import MainCities from '../components/MainCities'
import ScrollToTop from '../components/ScrollToTop'


class Cities extends React.Component {

    render() {
        return (
            <>
                <ScrollToTop />
                <div className="citiesHero" style={{ backgroundImage: "url('/assets/cities.jpg')" }}>
                    <div className="logo">
                        <div className="logo-img" style={{ backgroundImage: "url('/assets/logotype.png')" }}></div>
                    </div>
                </div>
                <MainCities />
            </>
        )
    }
}

export default Cities

