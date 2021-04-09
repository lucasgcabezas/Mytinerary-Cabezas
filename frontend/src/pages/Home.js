import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="hero">
                    <div className="logo"><p>logo</p></div>
                    <div className="slogan">frase</div>
                    <div className="cta-plane">
                        <button className="cta"><p>Your dream destination</p></button>
                        <img className="plane" src="https://www.pngkit.com/png/full/118-1185026_flying-airplane-vector-airplane-png.png" ></img>
                    </div>
                    <div className="transitionHero"></div>
                </div>
                <Slider />
                <Footer />
            </>
        )
    }
}

