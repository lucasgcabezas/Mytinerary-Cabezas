import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar  from './Navbar'

const Hero = (props,{ headerItineraries }) => {
    
    const [navbar, setNavbar] = useState({ visible: false })

    const callNavbar = () => { setNavbar({ visible: !navbar.visible }) }

    let navbarResponsiveSize = window.screen.width < 1024

    let userPicHeader = props.userLogged ? props.userLogged.userPic : '/assets/unlog.png'

    return (
        // <header className="header" style={ headerItineraries && {backgroundColor : '#00000077'}}>
        <header className={headerItineraries ? 'headerItinerary ' : 'header'}>
            <div className="isologo">
                <Link to="/"> <div className="isologo-img" style={{ backgroundImage: "url('/assets/isotype.png')" }}></div> </Link>
            </div>
            <div className="nav-unlog">
                {
                    navbarResponsiveSize
                        ? <div className={navbar.visible ? 'responsiveNavOpen' : 'responsiveNavClose'} > <Navbar /> </div>
                        : <nav className="navbar"> <Navbar /> </nav>
                }
                <div className="unlog" >
                    {/* <div className="unlog-img" style={{ backgroundImage: "url('/assets/unlog.png')" }}></div> */}
                    <div className="unlog-img" style={{ backgroundImage: `url(${userPicHeader})` }}></div>
                </div>
                <div className="toggleNav" onClick={callNavbar}>&equiv;</div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

export default connect(mapStateToProps)(Hero)

