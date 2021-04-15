import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="divFooter">
                    <div className="logo-footer">
                        <div className="logo-img-footer" style={{ backgroundImage: "url('./assets/logotype.png')" }}></div>
                    </div>
                    <div className="navigation-social">
                        <div className="linkFooter">
                            <span className="footerTitle">Navigation</span>
                            <Navbar />
                        </div>
                        <div className="social">
                            <span className="footerTitle">Social</span>
                            <div className="socialIcon">
                                <span className="fab fa-facebook"></span>
                                <span className="fab fa-instagram"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <span>
                        &#169;Copyright  - All rights reserved - Lucas Cabezas
                </span>
                </div>
            </div>
        </>
    )
}
export default Footer