import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="divFooter">
                    <div className="linkFooter">
                        <span className="footerTitle">Navigation</span>
                        <Link className="link" exact to="/"><span>Home</span></Link>
                        <Link className="link" to="/cities"><span>Cities</span></Link>
                        <Link className="link" to="/"><span >Log In</span></Link>
                        <Link className="link" to="/"><span >Sign Up</span></Link>
                    </div>
                    <div className="social">
                    
                        
                        <span className="fab fa-facebook"></span>
                        <span className="fab fa-instagram"></span>
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