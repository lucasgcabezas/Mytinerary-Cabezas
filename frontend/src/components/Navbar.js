import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <NavLink exact to="/"><span className="link">Home</span></NavLink>
            <NavLink exact to="/cities"><span className="link">Cities</span></NavLink>
            <NavLink exact to="/login"><span className="link">Log In</span></NavLink>
            <NavLink exact to="/login"><span className="link">Sign Up</span></NavLink>
        </>
    )
}

