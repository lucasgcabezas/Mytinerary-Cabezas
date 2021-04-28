import './css/flickity.css'
import './css/style.css'
import React from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import Cities from './pages/Cities'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Admin from './pages/Admin'
import Itineraries from './pages/Itineraries'
import Footer from './components/Footer'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'


export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cities" component={Cities} />
                    <Route path="/user/signin" component={SignIn} />
                    <Route path="/user/signup" component={SignUp} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/itineraries/:id" component={Itineraries} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}


