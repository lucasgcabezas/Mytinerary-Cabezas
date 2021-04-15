import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import City from '../components/City'

export default class Home extends React.Component {







    state = {
        ciudades: [
            { name: 'Barcelona', img: './assets/barcelona.jpg', id: 1 },
            { name: 'Buenos Aires', img: './assets/buenosaires.jpg', id: 2 },
            { name: 'Berlin', img: './assets/berlin.jpg', id: 3 },
            { name: 'Paris', img: './assets/paris.jpg', id: 4 },
            { name: 'New York', img: './assets/newyork.jpg', id: 5 },
            { name: 'San Andres', img: './assets/sanandres.jpeg', id: 6 },
            { name: 'Santorini', img: './assets/santorini.jpg', id: 7 },
            { name: 'Tokyo', img: './assets/tokyo.jpg', id: 8 },
            { name: 'Abu Dhabi', img: './assets/abudhabi.jpg', id: 9 },
            { name: 'Miami', img: './assets/miami.jpg', id: 10 },
            { name: 'London', img: './assets/london.jpg', id: 11 },
            { name: 'Sydney', img: './assets/sydney.jpg', id: 12 }
        ],
        ciudadesFiltradas: []
    }

    componentDidMount() { this.setState({ ciudadesFiltradas: this.state.ciudades }) }

    buscarPais = (e) => {
        var valor = e.target.value.toLowerCase().trim()

        var nuevasCiudades = this.state.ciudades.filter(ciudad => ciudad.name.toLowerCase().startsWith(valor))
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






                <div className="citiesContainer">
                    <div>
                        <input className="cityFilter" placeholder="Buscar paises" onChange={this.buscarPais}></input>

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

