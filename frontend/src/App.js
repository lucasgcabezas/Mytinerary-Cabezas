import './css/flickity.css'
import './css/style.css'
import React from 'react'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Cities from './pages/Cities'
import Itineraries from './components/Itineraries'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cities" component={Cities} />
                    <Route path="/admin" component={Admin}/>
                    <Route path="/itineraries/:id/:name/" component={Itineraries} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}


