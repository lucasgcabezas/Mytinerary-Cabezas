import { combineReducers } from "redux";
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'
import adminReducer from './adminReducer'
import authReducer from './authReducer'
import commentReducer from './commentReducer'

const rootReducer = combineReducers({ cityReducer, itineraryReducer, adminReducer, authReducer, commentReducer })

export default rootReducer