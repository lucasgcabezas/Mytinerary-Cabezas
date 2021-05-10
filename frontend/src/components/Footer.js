import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
    return (
        <>
            <div className="footer" style={{backgroundImage : "url('/assets/footer.jpg')"}}>
                <div className="footerFilter"></div>
                <div className="divFooter">
                    <div className="logo-footer">
                        <div className="logo-img-footer" style={{ backgroundImage: "url('/assets/logotype.png')" }}></div>
                    </div>
                    <div className="navigation-social">
                        <div className="linkFooter">
                            <span className="footerTitle">Explore</span>
                            <Navbar />
                        </div>
                        <div className="contact">
                            <span className="footerTitle">Contact</span>
                            <div className="contactIcon">
                                <span><i className="fas fa-phone-alt"></i> <span className="ubi-tel">011 4976-3658</span></span>
                                <span><i className="fas fa-map-marker-alt"></i> <span className="ubi-tel">Av. Santa Fe 1123, Bs As, Argentina</span></span>
                            </div>
                        </div>
                        <div className="social">
                            <span className="footerTitle">Social</span>
                            <div className="socialIcon">
                                <span className="fab fa-facebook"></span>
                                <span className="fab fa-instagram"></span>
                                <span className="fab fa-twitter"></span>
                                <span className="fab fa-whatsapp"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <span>
                        &#169;Copyright  - All rights reserved - Lucas Cabezas
                </span>
                </div>
            </div>
        </>
    )
}
export default Footer

