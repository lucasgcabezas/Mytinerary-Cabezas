import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import axios from 'axios'

export default class Admin extends React.Component {
 
    addNewCity = () => {
        let nameNewCity = document.getElementById("nCity").value
        let countryNewCity = document.getElementById("cCity").value
        let imgNewCity = document.getElementById("imgCity").value
        let phraseNewCity = document.getElementById("phCity").value

        axios.post('http://localhost:4000/api/cities', {
            name: nameNewCity,
            img: imgNewCity,
            country: countryNewCity,
            phrase: phraseNewCity,
        })
    }



    render() {

        // let comentario = document.getElementById("inputComentario").value
        return (
            <>
                <Header />
                <Hero />
                <div className="adminContainer">
                    <input id="nCity" placeholder="Insert name of city"></input>
                    <input id="cCity" placeholder="Insert country of city"></input>
                    <input id="imgCity" placeholder="Insert img route of city"></input>
                    <input id="phCity" placeholder="Insert phrase of city"></input>
                    <button onClick={this.addNewCity}>Send!</button>
                </div>
                <Footer />
            </>
        )
    }
}

