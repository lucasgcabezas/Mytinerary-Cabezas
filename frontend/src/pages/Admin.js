import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AdminCard from '../components/AdminCard'
import axios from 'axios'

export default class Admin extends React.Component {

    state = {
        citiesArray: [],
        citiesFiltered: [],
        loading: true,
        selectedCityId: 'selector',
        cityToShow: ''
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/cities')
            .then(response => this.setState({ citiesArray: response.data.answer, citiesFiltered: response.data.answer, loading: false, }))
    }

    addNewCity = (e) => {
        e.preventDefault()

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
        .then(response => this.setState({ citiesArray: response.data.answer, citiesFiltered: response.data.answer, loading: false, }))

        document.getElementById("formAdmin").reset()
    }

    selectCity = (e) => {
        axios.get('http://localhost:4000/api/city/' + e.target.value)
            .then(response => this.setState({ cityToShow: response.data.answer, loading: false, selectedCityId: e.target.value }))
    }


    deleteCity = (e) => {
        e.preventDefault()
        const idDelete = e.target.dataset.idborrar
        axios.delete('http://localhost:4000/api/city/' + idDelete)
            .then(response => {
                this.setState({ citiesArray: this.state.citiesArray.filter(city => city._id !== response.data.answer._id) })
            })
    }
    
    render() {
        return (
            <>
                <Header />
                <Hero />
                <div className="adminContainer">
                    <form id="formAdmin">
                        <input id="nCity" placeholder="Insert name of city"></input>
                        <input id="cCity" placeholder="Insert country of city"></input>
                        <input id="imgCity" placeholder="Insert img route of city"></input>
                        <input id="phCity" placeholder="Insert phrase of city"></input>
                        <button onClick={this.addNewCity}>Send!</button>
                    </form>
                    <select onChange={this.selectCity}>
                        <option value="selector">Select a city </option>
                        {
                            this.state.citiesArray.map(city => {
                                return <option value={city._id} key={city._id}>{city.name}</option>
                            })
                        }
                    </select>
                    {
                        this.state.selectedCityId !== 'selector'
                            ? <AdminCard cityToShow={this.state.cityToShow} borrarTarea={this.deleteCity} />
                            : <p>No seleccionaste ninguna ciudad</p>
                    }
                </div>
                <Footer />
            </>
        )
    }
}

