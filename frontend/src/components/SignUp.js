import { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Hero from './Hero'
import Preloader from './Preloader'
import authActions from '../redux/actions/authActions'

const SignUp = (props) => {

    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })

    const [allCountries, setallCountries] = useState({ countries: [], preloader: true })

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => setallCountries({ countries: response.data, preloader: false }))
    }, [])

    const getInput = e => { setNewUser({ ...newUser, [e.target.name]: e.target.value }) }

    const sendNewUser = e => {
        e.preventDefault()
        props.signUpUser(newUser)
        setNewUser({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })
    }

    if (allCountries.preloader) {
        return <Preloader />
    }

    const { firstName, lastName, email, password, userPic, country } = newUser

    return (
        <>
            {/* <Hero /> */}
            <div className="formContainer">
                <form className="form">
                    <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={getInput}></input>
                    <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={getInput}></input>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={getInput}></input>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={getInput}></input>
                    <input type="text" placeholder="Picture" name="userPic" value={userPic} onChange={getInput}></input>
                    <select name="country" value={country} onChange={getInput}>
                        <option disabled selected value=''>Countries</option>
                        {
                            allCountries.countries.map((c, i) => {
                                return <option key={i} value={c.name} >{c.name}</option>
                            })
                        }
                    </select>
                    <button onClick={sendNewUser}>Send!</button>
                </form>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    signUpUser: authActions.signUpUser
}

export default connect(null, mapDispatchToProps)(SignUp)