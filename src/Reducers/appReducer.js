import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer.js';

const appReducer = combineReducers({
    moviesReducer,
})
export default appReducer;
