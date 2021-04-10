
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <Link exact to="/"><span className="link">Home</span></Link>
            <Link to="/cities"><span className="link">Cities</span></Link>
            <Link to="/"><span className="link">Log In</span></Link>
            <Link to="/"><span className="link">Sign Up</span></Link>
    
        </>
    )
}

 