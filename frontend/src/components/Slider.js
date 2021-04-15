import React from 'react'
import Carousel from './slider/Carousel'

const Slider = () => {

    const citiesCarrousel = [
        [
            { name: 'Barcelona', img: './assets/barcelona.jpg', id: 1 },
            { name: 'Buenos Aires', img: './assets/buenosaires.jpg', id: 2 },
            { name: 'Berlin', img: './assets/berlin.jpg', id: 3 },
            { name: 'Paris', img: './assets/paris.jpg', id: 4 }
        ],

        [
            { name: 'New York', img: './assets/newyork.jpg', id: 5 },
            { name: 'San Andres', img: './assets/sanandres.jpeg', id: 6 },
            { name: 'Santorini', img: './assets/santorini.jpg', id: 7 },
            { name: 'Tokyo', img: './assets/tokyo.jpg', id: 8 }
        ],

        [
            { name: 'Abu Dhabi', img: './assets/abudhabi.jpg', id: 9 },
            { name: 'Miami', img: './assets/miami.jpg', id: 10 },
            { name: 'London', img: './assets/london.jpg', id: 11 },
            { name: 'Sydney', img: './assets/sydney.jpg', id: 12 }
        ]
    ]

    const citiesCarrouselResponsive = []

    citiesCarrousel.map((arraySlide) => {
        let array1 = arraySlide.slice(0, 2)
        let array2 = arraySlide.slice(-2)
        return citiesCarrouselResponsive.push(array1, array2)
    })

    let carrouselSize = window.screen.width < 500 ? citiesCarrouselResponsive : citiesCarrousel

    return (
        <div>
            <h2 className="titSlider">Popular MYtineraries</h2>
            <Carousel carrouselSize={carrouselSize} />
        </div>
    )
}
export default Slider


