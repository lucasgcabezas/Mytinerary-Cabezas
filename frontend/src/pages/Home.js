import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <Slider />
                <Footer />
            </>
        )
    }
}

