import { useState } from "react"
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { store } from 'react-notifications-component'
import { Link } from 'react-router-dom'


import Hero from './Hero'
import authActions from "../redux/actions/authActions"


const SignIn = (props) => {

    const [userToSignIn, setUserToSignIn] = useState({ email: '', password: '' })
    const { email, password } = userToSignIn


    const getInputSignIn = e => { setUserToSignIn({ ...userToSignIn, [e.target.name]: e.target.value }) }

    const sendSignInUser = (e = null, user) => {
        e && e.preventDefault()
        if (user.email || user.password) {
            props.signInUSer(user)
            e && setUserToSignIn({ email: '', password: '' })
        } else {
            store.addNotification({
                title: "Error",
                message: `Please complete the fields to continue!`,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__flipInX"],
                animationOut: ["animate__animated", "animate__fadeOutDown"],
                dismiss: { duration: 3000, onScreen: true, pauseOnHover: true, showIcon: true }
            })
        }
    }

    const responseGoogle = response => {
        const { email, googleId } = response.profileObj
        sendSignInUser(null, { email, password: 'l' + googleId })
    }


    return (
        <>
            <Hero />
            <div className="formContainer signin">
                <form className="form">
                    <input type="text" placeholder="Email" name="email" value={email} onChange={getInputSignIn} ></input>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={getInputSignIn} ></input>
                    <button onClick={(e) => sendSignInUser(e, userToSignIn)}>Send!</button>

                    <span> Or you can sign in with your Google account</span>

                    <GoogleLogin
                        clientId="970781340482-k7vb4liqmeip3ti8kd0gmf87ik8j0785.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <span>Don't have an account?  <Link exact to="/user/signup">Sign up here!</Link></span>
                </form>
            </div>
        </>
    )
}


const mapDispatchToProps = {
    signInUSer: authActions.signInUSer
}
export default connect(null, mapDispatchToProps)(SignIn)