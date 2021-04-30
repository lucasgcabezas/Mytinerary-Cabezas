import { useState } from "react"
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'

import Hero from './Hero'
import authActions from "../redux/actions/authActions"


const SignIn = (props) => {

    const [userToSignIn, setUserToSignIn] = useState({ email: '', password: '' })

    const getInputSignIn = e => { setUserToSignIn({ ...userToSignIn, [e.target.name]: e.target.value }) }

    const sendSignInUser = (e = null, user) => {
        e && e.preventDefault()

        props.signInUSer(user)
        e && setUserToSignIn({ email: '', password: '' })
    }


    const responseGoogle = response => {
        const { email, googleId } = response.profileObj
        sendSignInUser(null, {
            email, password: 'l'+googleId
        })
    }

    const { email, password } = userToSignIn

    return (
        <>
            <Hero />
            <div className="formContainer signin">
                <form className="form">
                    <input type="text" placeholder="Email" name="email" value={email} onChange={getInputSignIn} ></input>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={getInputSignIn} ></input>
                    <button onClick={(e)=>sendSignInUser(e,userToSignIn)}>Send!</button>

                    <GoogleLogin
                        clientId="970781340482-k7vb4liqmeip3ti8kd0gmf87ik8j0785.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>


            </div>
        </>
    )
}


const mapDispatchToProps = {
    signInUSer: authActions.signInUSer
}
export default connect(null, mapDispatchToProps)(SignIn)