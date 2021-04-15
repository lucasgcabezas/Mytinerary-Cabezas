import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import City from '../components/City'
import axios from 'axios'




export default class Home extends React.Component {


    // INFO FILTRO
    state = {
        ciudades: [
            // { name: 'Barcelona', img: 'barcelona.jpg', id: 1 , country: 'Spain', phrase: ''},
            // { name: 'Buenos Aires', img: 'buenosaires.jpg', id: 2 , country: 'Argentina', phrase: ' "Without the streets or dusks of Buenos Aires, a tango cannot be written." - Jorge Luis Borges '},
            // { name: 'Berlin', img: 'berlin.jpg', id: 3 , country: '', phrase: ''},
            // { name: 'Paris', img: 'paris.jpg', id: 4 , country: '', phrase: ''},
            // { name: 'New York', img: 'newyork.jpg', id: 5 , country: '', phrase: ''},
            // { name: 'San Andres', img: 'sanandres.jpeg', id: 6 , country: '', phrase: ''},
            // { name: 'Santorini', img: 'santorini.jpg', id: 7 , country: '', phrase: ''},
            // { name: 'Tokyo', img: 'tokyo.jpg', id: 8 , country: '', phrase: ''},
            // { name: 'Abu Dhabi', img: 'abudhabi.jpg', id: 9 , country: '', phrase: ''},
            // { name: 'Miami', img: 'miami.jpg', id: 10 , country: '', phrase: ''},
            // { name: 'London', img: 'london.jpg', id: 11 , country: '', phrase: ''},
            // { name: 'Sydney', img: 'sydney.jpg', id: 12 , country: '', phrase: ''},
            // { name: 'Sydney', img: 'sydney.jpg', id: 13 , country: '', phrase: ''},
            // { name: 'Sydney', img: 'sydney.jpg', id: 14 , country: '', phrase: ''},
            // { name: 'Sydney', img: 'sydney.jpg', id: 15 , country: '', phrase: ''}
        ],
        ciudadesFiltradas: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/cities')
        .then(response => this.setState({
            ciudades:response.data.answer,
            ciudadesFiltradas: response.data.answer
        }))

        // this.setState({ ciudadesFiltradas: this.state.ciudades })
    }

    buscarPais = (e) => {
        let valor = e.target.value.toLowerCase().trim()
        let nuevasCiudades = this.state.ciudades.filter(ciudad => ciudad.name.toLowerCase().startsWith(valor))

        this.setState({ ciudadesFiltradas: nuevasCiudades })
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

                {/*  FILTRO MODIFICAR */}
                <div className="citiesContainer">
                    <div>
                        <input className="cityFilter" placeholder="What is the destination of your dreams?" onChange={this.buscarPais}></input>
                    </div>
                    {
                        this.state.ciudadesFiltradas.length === 0
                            ? <p>NO SE ENCONTRARON RESULTADOS </p>
                            : this.state.ciudadesFiltradas.map((city) => <City key={city.id} city={city} />)
                    }
                </div>


                <Footer />
            </>
        )
    }
}

