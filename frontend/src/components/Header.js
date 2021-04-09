import {NavLink} from 'react-router-dom'

const Hero = () => {
    return (
        <header className="header">
            <div className="isologo">isologo</div>
            <div className="nav-unlog">
                <nav className="navbar" >
                    <NavLink exact to="/"><span>Home</span></NavLink>
                    <NavLink to="/cities"><span>Cities</span></NavLink>
                </nav>
                <div className="unlog">imagen</div>
            </div>
        </header>
    )
}
export default Hero