import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import City from '../components/City'
import axios from 'axios'
import Preloader from '../components/Preloader'


export default class Home extends React.Component {
    state = {
        citiesArray: [],
        citiesFiltered: [],
        loading: true
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/cities')
            .then(response => this.setState({ citiesArray: response.data.answer, citiesFiltered: response.data.answer, loading: false, }))
    }

    filterCity = (e) => {
        let valor = e.target.value.toLowerCase().trim()
        let newCities = this.state.citiesArray.filter(ciudad => ciudad.name.toLowerCase().startsWith(valor))
        this.setState({ citiesFiltered: newCities })
    }

    render() {
        return (
            <>
                <Header />
                <div className="citiesHero" style={{ backgroundImage: "url('./assets/cities.jpg" }}>
                    <div>
                        <h2>Under construction!</h2>
                    </div>
                </div>
                {
                    this.state.loading
                        ? < Preloader />
                        : <div className="citiesContainer">
                            <div>
                                <input className="cityFilter" placeholder="What is the destination of your dreams?" onChange={this.filterCity}></input>
                            </div>
                            {
                                this.state.citiesFiltered.length === 0
                                    ? <p style={{ color: 'white' }}>NOT FOUND CITIES </p>
                                    : this.state.citiesFiltered.map((city) => <City key={city._id} city={city} />)
                            }
                        </div>
                }
                <Footer />
            </>
        )
    }
}


