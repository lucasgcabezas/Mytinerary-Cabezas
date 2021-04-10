// import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { Navbar } from './Navbar'

const Hero = () => {

    const [navbar, setNavbar] = useState({
        visible: false
    });


    // let scrollPrev = window.scrollY

    // window.addEventListener("scroll", (e) => {
    //     // let scrollNow = e.path[1].scrollY
    //     // console.log(window.pageYOffset)
    //     console.log(e.screenTop)

    // })

    const callNavbar = () => {
        setNavbar({ visible: !navbar.visible })
        console.log(navbar.visible)
    }

    let navbarResponsiveSize = window.screen.width < 600

    return (
        <header className="header">
            <div className="isologo">isologo</div>
            <div className="nav-unlog">
                {
                    navbarResponsiveSize
                        ? <div className={ navbar.visible ? 'responsiveNavOpen' : 'responsiveNavClose' } > <Navbar /> </div>
                        : <nav className="navbar"> <Navbar /> </nav>
                }
                <div className="unlog">imagen</div>
                <div className="toggleNav" onClick={ callNavbar }>&equiv;</div> 
            </div>
        </header>
    )
}
export default Hero