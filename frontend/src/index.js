import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './redux/reducers/mainReducer'
import App from './App'


const myTineraryStore = createStore(mainReducer , applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={myTineraryStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);

