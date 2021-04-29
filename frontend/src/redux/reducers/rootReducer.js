import { combineReducers } from "redux";
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'
import adminReducer from './adminReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({ cityReducer, itineraryReducer, adminReducer, authReducer })

export default rootReducer