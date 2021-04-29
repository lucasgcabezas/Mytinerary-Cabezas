import './css/flickity.css'
import './css/style.css'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/Header'
import Home from './pages/Home'
import Cities from './pages/Cities'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Admin from './pages/Admin'
import Itineraries from './pages/Itineraries'
import Footer from './components/Footer'
import authActions from './redux/actions/authActions'


class App extends React.Component {
    render() {

        if (!this.props.userLogged && localStorage.getItem('userLogged')) {
            this.props.signInLocalStorage(JSON.parse(localStorage.getItem('userLogged')))
        }

        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cities" component={Cities} />
                    {!this.props.userLogged && <Route path="/user/signin" component={SignIn} />}
                    {!this.props.userLogged && <Route path="/user/signup" component={SignUp} />}
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/itineraries/:id" component={Itineraries} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    signInLocalStorage: authActions.signInLocalStorage
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

