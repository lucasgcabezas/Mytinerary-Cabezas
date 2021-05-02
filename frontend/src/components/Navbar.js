import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import authActions from '../redux/actions/authActions'

const Navbar = (props) => {
    return (
        <>
            <NavLink exact to="/"><span className="link">Home</span></NavLink>
            <NavLink exact to="/cities"><span className="link">Cities</span></NavLink>
            {
                props.userLogged
                    ? <>
                        <span className="link" onClick={props.signOut}>Sign Out</span>
                        {/* <span>Hola {props.userLogged.firstName}</span> */}
                    </>
                    : <>
                        <NavLink exact to="/user/signup"><span className="link">Sign Up</span></NavLink>
                        <NavLink exact to="/user/signin"><span className="link">Sign In</span></NavLink>
                    </>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    signOut: authActions.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)