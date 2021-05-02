import { useState } from "react"
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { store } from 'react-notifications-component'
import { Link } from 'react-router-dom'


import authActions from "../redux/actions/authActions"


const SignIn = (props) => {

    const [userToSignIn, setUserToSignIn] = useState({ email: '', password: '' })
    const { email, password } = userToSignIn
    const [passwordEyeTrigger, setPasswordEyeTrigger] = useState(true)

    let passwordClass = passwordEyeTrigger ? "fas fa-eye passwordEye" : "fas fa-eye-slash passwordEye"
    let passwordType = passwordEyeTrigger ? 'password' : 'text'


    const getInputSignIn = e => { setUserToSignIn({ ...userToSignIn, [e.target.name]: e.target.value }) }

    const sendSignInUser = (e = null, user) => {
        e && e.preventDefault()
        if (user.email && user.password) {
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
            <div style={{ backgroundColor: 'var(--fcolor)', height: '5vh' }}></div>
            <div className="formContainerSignIn">
                <div className="singUpImg" style={{ backgroundImage: "url('/assets/signin.jpg')" }}>
                    <div className="signUpImgContainer">
                        <div className="callToActionContainer">
                            <h3>Hello, Friend!</h3>

                            <div className="callToActionSignIn">
                                <span>Don't have an account yet?  </span>
                                <Link to="/user/signup">
                                    <button>Sign Up</button>
                                </Link>
                            </div>
                            <span className="callToActionResponsive">Don't have an account yet? <Link to="/user/signup">Sign up here!</Link></span>

                        </div>
                    </div>
                </div>
                <form className="form">
                    <div className="inputContainer">
                        <input type="text" placeholder="Email" name="email" value={email} onChange={getInputSignIn} ></input>
                    </div>

                    <div className="inputContainer">
                        <input type={passwordType} placeholder="Password" name="password" value={password} onChange={getInputSignIn} ></input>
                        <span className={passwordClass} onClick={()=>setPasswordEyeTrigger(!passwordEyeTrigger)}></span>
                    </div>

                    <div className="separatorFormSignIn"></div>

                    <button className="signButton" onClick={(e) => sendSignInUser(e, userToSignIn)}>Sign In</button>
                    <span className="or"> Or you can sign in with Google</span>
                    <GoogleLogin
                        className="googleButton"
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