import './css/flickity.css'
import './css/style.css'
import React from 'react'
import Home from './pages/Home'
import Cities from './pages/Cities'
import { BrowserRouter, Route } from 'react-router-dom'


export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/cities" component={Cities}/>
            </BrowserRouter>
        )
    }
}


