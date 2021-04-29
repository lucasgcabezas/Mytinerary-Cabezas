import { useState } from "react"
import { connect } from 'react-redux'

import Hero from './Hero'
import authActions from "../redux/actions/authActions"

const SignIn = (props) => {

    const [userToSignIn, setUserToSignIn] = useState({ email: '', password: '' })

    const getInputSignIn = e => { setUserToSignIn({ ...userToSignIn, [e.target.name]: e.target.value }) }

    const sendSignInUser = e => {
        e.preventDefault()
        props.signInUSer(userToSignIn)
        setUserToSignIn({ email: '', password: '' })
    }

    const { email, password } = userToSignIn

    return (
        <>
            {/* <Hero /> */}
            <div className="formContainer signin">
                <form className="form">
                    <input type="text" placeholder="Email" name="email" value={email} onChange={getInputSignIn} ></input>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={getInputSignIn} ></input>
                    <button onClick={sendSignInUser}>Send!</button>
                </form>
            </div>
        </>
    )
}


const mapDispatchToProps = {
    signInUSer: authActions.signInUSer
}
export default connect(null, mapDispatchToProps)(SignIn)