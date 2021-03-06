import './css/flickity.css'
import './css/style.css'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/Header'
import Home from './pages/Home'
import Cities from './pages/Cities'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Admin from './pages/Admin'
import Itineraries from './pages/Itineraries'
import Footer from './components/Footer'
import authActions from './redux/actions/authActions'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'




class App extends React.Component {
    render() {

        if (!this.props.userLogged && localStorage.getItem('token')) {
            const userData = JSON.parse(localStorage.getItem('userLogged'))
            const userLS = { ...userData, token: localStorage.getItem('token') }
            this.props.signInLocalStorage(userLS)
            return null
        }

        if (this.props.userLogged) {
            this.props.checkAdmin(this.props.userLogged)
        }
        
        return (
            <>
                <ReactNotification />
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/cities" component={Cities} />
                        {!this.props.userLogged && <Route path="/user/signin" component={SignIn} />}
                        {!this.props.userLogged && <Route path="/user/signup" component={SignUp} />}
                        {this.props.userLogged && this.props.userAdm && <Route exact path="/admin" component={Admin} />}
                        {/* <Route exact path="/admin" component={Admin} /> */}
                        <Route exact path="/itineraries/:id" component={Itineraries} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged,
        userAdm: state.authReducer.userAdm
    }
}

const mapDispatchToProps = {
    signInLocalStorage: authActions.signInLocalStorage,
    checkAdmin: authActions.checkAdmin
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

