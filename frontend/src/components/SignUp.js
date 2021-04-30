import { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'

import Hero from './Hero'
import Preloader from './Preloader'
import authActions from '../redux/actions/authActions'


const SignUp = (props) => {

    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })
    const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })
    const [allCountries, setAllCountries] = useState({ countries: [], preloader: true })

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => setAllCountries({ countries: response.data, preloader: false }))
    }, [])

    const getInput = e => { setNewUser({ ...newUser, [e.target.name]: e.target.value }) }

    const sendNewUser = async (e = null, user) => {
        e && e.preventDefault()

        const catchErrors = await props.signUpUser(user)
        if (catchErrors) {
            catchErrors.details.map(err => setErrors(prevState => {
                return { ...prevState, [err.context.label]: err.message }
            }))
        }

        e && setNewUser({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })
    }

    if (allCountries.preloader) {
        return <Preloader />
    }
    
    const responseGoogle = response => {
        const { givenName, familyName, email, googleId, imageUrl } = response.profileObj
        sendNewUser(null, {
            firstName: givenName, lastName: familyName, email, password: 'l' + googleId, userPic: imageUrl, country: 'Narnia'
        })
    }
    
    const { firstName, lastName, email, password, userPic, country } = newUser


    console.log(errors)

    return (
        <>
            <Hero />
            <div className="formContainer">
                <form className="form">
                    <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={getInput} style={{ border: errors.firstName.length > 2 ? 'solid red 2px' : '' }}></input>
                    <p>{errors.firstName}</p>
                    <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={getInput}></input>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={getInput}></input>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={getInput}></input>
                    <input type="text" placeholder="Picture" name="userPic" value={userPic} onChange={getInput}></input>
                    <select name="country" value={country} onChange={getInput}>
                        <option disabled defaultValue value=''>Countries</option>
                        {
                            allCountries.countries.map((c, i) => {
                                return <option key={i} value={c.name} >{c.name}</option>
                            })
                        }
                    </select>
                    <button onClick={(e) => sendNewUser(e, newUser)}>Send!</button>

                    <GoogleLogin
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
    signUpUser: authActions.signUpUser
}

export default connect(null, mapDispatchToProps)(SignUp)