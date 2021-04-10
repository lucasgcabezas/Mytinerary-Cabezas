import React from 'react'
import {NavLink} from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer">
            <h1>HOLA SOY FOOTER </h1>
            <NavLink exact to="/"><span>Home</span></NavLink>
            <NavLink to="/cities"><span>Cities</span></NavLink>
        </div>
    )
}

export default Footer