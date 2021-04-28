import { useState } from "react"
import axios from 'axios'

import Hero from './Hero'

const SignIn = () => {

    const [signInUser, setSignInUser] = useState({ email: '', password: '' })

    const getInputSignIn = e => { setSignInUser({ ...signInUser, [e.target.name]: e.target.value }) }

    const sendSignInUser = e => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/user/signin', signInUser)
            // Falta cacheo
            .then(response => console.log(response.data))

        setSignInUser({ email: '', password: '' })
    }

    const { email, password } = signInUser

    return (
        <>
            <Hero />
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

export default SignIn