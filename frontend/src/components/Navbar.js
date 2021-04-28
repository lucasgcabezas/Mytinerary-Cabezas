import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <NavLink exact to="/"><span className="link">Home</span></NavLink>
            <NavLink exact to="/cities"><span className="link">Cities</span></NavLink>
            <NavLink exact to="/user/signup"><span className="link">Sign Up</span></NavLink>
            <NavLink exact to="/user/signin"><span className="link">Sign In</span></NavLink>
        </>
    )
}

