import { useEffect, useState } from 'react'
import axios from 'axios'

import Preloader from './Preloader'
import Hero from './Hero'

const SignUp = () => {

    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })

    const [allCountries, setallCountries] = useState({ countries: [], preloader: true })

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            // Falta cacheo
            .then(response => setallCountries({ countries: response.data, preloader: false }))
    }, [])

    const getInput = e => { setNewUser({ ...newUser, [e.target.name]: e.target.value }) }

    const sendNewUser = e => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/user/signup', newUser)
            // Falta cacheo
            .then(response => console.log(response.data))

        setNewUser({ firstName: '', lastName: '', email: '', password: '', userPic: '', country: '' })
    }


    if (allCountries.preloader) {
        return <Preloader />
    }

    const { firstName, lastName, email, password, userPic, country } = newUser

    return (
        <>
            <Hero />
            <div className="formContainer">
                <form className="form">
                    <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={getInput}></input>
                    <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={getInput}></input>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={getInput}></input>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={getInput}></input>
                    <input type="text" placeholder="Picture" name="userPic" value={userPic} onChange={getInput}></input>
                    <select name="country" defaultValue={country} onChange={getInput}>
                        <option>Countries</option>
                        {
                            allCountries.countries.map((country, i) => {
                                return <option key={i} value={country.name} >{country.name}</option>
                            })
                        }
                    </select>
                    <button onClick={sendNewUser}>Send!</button>
                </form>
            </div>
        </>
    )
}

export default SignUp