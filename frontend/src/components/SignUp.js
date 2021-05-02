import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { store } from 'react-notifications-component'
import { Link } from 'react-router-dom'

import Preloader from './Preloader'
import authActions from '../redux/actions/authActions'


const SignUp = (props) => {

    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })
    const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })
    const [allCountries, setAllCountries] = useState({ countries: [], preloader: true })
    const [passwordEyeTrigger, setPasswordEyeTrigger] = useState(true)

    const { firstName, lastName, email, password, userPic, country } = newUser
    let passwordClass = passwordEyeTrigger ? "fas fa-eye passwordEye" : "fas fa-eye-slash passwordEye"
    let passwordType = passwordEyeTrigger ? 'password' : 'text'


    useEffect(() => {
        props.getCountries()
            .then(response => setAllCountries({ countries: response, preloader: false }))
    }, [])


    const getInput = e => { setNewUser({ ...newUser, [e.target.name]: e.target.value }) }

    const sendNewUser = async (e = null, user) => {
        e && e.preventDefault()

        if (user.firstName && user.lastName && user.email && user.password && user.userPic && user.country) {
            const catchErrors = await props.signUpUser(user)
            if (catchErrors) {
                setErrors({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })
                catchErrors.details.map(err => setErrors(prevState => {
                    return { ...prevState, [err.context.label]: err.message }
                }))
            }
            e && !catchErrors
                && setNewUser({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })

        } else {
            store.addNotification({
                title: "Error",
                message: `Please complete all the fields to continue!`,
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
        const { givenName, familyName, email, googleId, imageUrl } = response.profileObj
        sendNewUser(null, { firstName: givenName, lastName: familyName, email, password: 'l' + googleId, userPic: imageUrl, country: 'Narnia' })
    }


    allCountries.preloader
        && <Preloader />

    return (
        <>
            <div style={{ backgroundColor: 'var(--fcolor)', height: '5vh' }}></div>
            <div className="formContainer" >
                <div className="singUpImg" style={{ backgroundImage: "url('/assets/signup.jpg')" }}>
                    <div className="signUpImgContainer">
                        <div className="callToActionContainer">
                            <h3>Welcome</h3>
                            <div className="callToActionSignIn">
                                <span>Already have an account? </span>
                                <Link to="/user/signin">
                                    <button>Sign In</button>
                                </Link>

                            </div>
                                <span className="callToActionResponsive">Already have an account? <Link to="/user/signin">Sign in here!</Link></span>
                        </div>
                    </div>
                </div>

                <form className="form">
                    {/* <input type="text" placeholder="First Name" name="firstName" value={firstName} 
                    onChange={getInput} style={{ border: errors.firstName.length > 2 ? 'solid red 2px' : '' }}></input> */}
                    <div className="inputContainer">
                        <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={getInput} ></input>
                        <span className="errorSignUp">{errors.firstName}</span>
                    </div>

                    <div className="inputContainer">
                        <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={getInput}></input>
                        <span className="errorSignUp">{errors.lastName}</span>
                    </div>

                    <div className="inputContainer">
                        <input type="text" placeholder="Email" name="email" value={email} onChange={getInput}></input>
                        <span className="errorSignUp">{errors.email}</span>
                    </div>

                    <div className="inputContainer">
                        <input type={passwordType} placeholder="Password" name="password" value={password} onChange={getInput}></input>
                        <span className={passwordClass} onClick={()=>setPasswordEyeTrigger(!passwordEyeTrigger)}></span>
                        <span className="errorSignUp">{errors.password}</span>

                    </div>

                    <div className="inputContainer">
                        <input type="text" placeholder="Picture" name="userPic" value={userPic} onChange={getInput}></input>
                        <span className="errorSignUp">{errors.userPic}</span>
                    </div>

                    <select name="country" value={country} onChange={getInput}>
                        <option disabled defaultValue value=''>Countries</option>
                        {
                            allCountries.countries.map((c, i) => {
                                return <option key={i} value={c.name} >{c.name}</option>
                            })
                        }
                    </select>
                    <span>{errors.country}</span>


                    <button className="signButton" onClick={(e) => sendNewUser(e, newUser)}>Sign Up</button>

                    <span className="or"> Or you can sign up with Google</span>

                    <GoogleLogin
                        className="googleButton"
                        clientId="970781340482-k7vb4liqmeip3ti8kd0gmf87ik8j0785.apps.googleusercontent.com"
                        buttonText="Sign Up with Google"
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
    signUpUser: authActions.signUpUser,
    getCountries: authActions.getCountries
}

export default connect(null, mapDispatchToProps)(SignUp)