import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import patientsReducer from './reducers/patients.js'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    users: usersReducer,
    patients: patientsReducer
  })
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  