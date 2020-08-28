import { combineReducers } from 'redux'
import MovieReducer from './MovieReducer'
import AuthReducer from './AuthReducer'

const initialState = {
    pickedMovie: {},
    authResponse: null,
    user: {},
    movies: [],
    loaded: false
}

const RootReducer = combineReducers({
    auth: AuthReducer,
    movie: MovieReducer
})


export default RootReducer