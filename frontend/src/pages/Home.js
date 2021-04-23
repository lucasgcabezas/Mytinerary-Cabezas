import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <ScrollToTop />
                <Header />
                <Hero />
                <Slider />
                <Footer />
            </>
        )
    }
}

