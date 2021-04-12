import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="citiesHero" style={{ backgroundImage: "url('./assets/cities.jpg" }}>
                    <div>
                        <h2>Under construction!</h2>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

