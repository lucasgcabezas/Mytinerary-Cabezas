import React from 'react'
import Carousel from './slider/Carousel'


const Slider = () => {


    const citiesCarrousel = [
        [
            { name: 'Barcelona', img: '', id: 1 },
            { name: 'Buenos Aires', img: '', id: 2 },
            { name: 'Berlin', img: '', id: 3 },
            { name: 'Paris', img: '', id: 4 }
        ],

        [
            { name: 'New York', img: '', id: 5 },
            { name: 'Bogotá', img: '', id: 6 },
            { name: 'Santorini', img: '', id: 7 },
            { name: 'Tokyo', img: '', id: 8 }
        ],

        [
            { name: 'Abu Dhabi', img: '', id: 9 },
            { name: 'Miami', img: '', id: 10 },
            { name: 'London', img: '', id: 11 },
            { name: 'Sydney', img: '', id: 12 }
        ]
    ]

    const citiesCarrouselResponsive = []

    citiesCarrousel.map((arraySlide) => {
        let array1 = arraySlide.slice(0, 2)
        let array2 = arraySlide.slice(-2)
        citiesCarrouselResponsive.push(array1, array2)
    })

    let carrouselSize = window.screen.width < 468 ? citiesCarrouselResponsive : citiesCarrousel

    return (
        <div>
            <Carousel carrouselSize={carrouselSize}/>
        </div>

    )
}

export default Slider


