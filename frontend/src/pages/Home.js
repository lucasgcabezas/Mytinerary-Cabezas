import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import ScrollToTop from '../components/ScrollToTop'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <ScrollToTop />
                <Hero />
                <Slider />
            </>
        )
    }
}

