
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <NavLink exact to="/"><span>Home</span></NavLink>
            <NavLink to="/cities"><span>Cities</span></NavLink>
            <span>Log In</span>|
            <span>Sign Up</span>
        </>
    )
}

 