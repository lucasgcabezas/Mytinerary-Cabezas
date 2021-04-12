import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {

    const [navbar, setNavbar] = useState({
        visible: false
    });

    const callNavbar = () => {
        setNavbar({ visible: !navbar.visible })
    }

    let navbarResponsiveSize = window.screen.width < 1024

    return (
        <header className="header">
            <div className="isologo">
                <Link to="/">
                    <div className="isologo-img" style={{ backgroundImage: "url('./assets/isotype.png')" }}></div>
                </Link>
            </div>
            <div className="nav-unlog">
                {
                    navbarResponsiveSize
                        ? <div className={navbar.visible ? 'responsiveNavOpen' : 'responsiveNavClose'} > <Navbar /> </div>
                        : <nav className="navbar"> <Navbar /> </nav>
                }
                <div className="unlog" >
                    <div className="unlog-img" style={{ backgroundImage: "url('./assets/unlog.png')" }}></div>
                </div>
                <div className="toggleNav" onClick={callNavbar}>&equiv;</div>
            </div>
        </header>
    )
}
export default Hero