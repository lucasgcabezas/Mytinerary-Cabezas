import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero">
            <div className="logo">
                <div className="logo-img" style={{ backgroundImage: "url('./assets/logotype.png')" }}></div>
            </div>
            <div className="slogan">
                <div>
                    <h1>Find your perfect trip, designed by insiders who know and love their cities!</h1>
                </div>
            </div>
            <Link to="/cities">
                <div className="cta-plane">
                    <button className="cta"><p>Your dream destination</p></button>
                    {/* <span className="fas fa-plane planeIcon"></span> */}
                    {/* <img className="plane" alt="airplane" src="./assets/plane2.png" ></img> */}
                </div>
            </Link>
            <div className="transitionHero"></div>
        </div>
    )
}
export default Hero