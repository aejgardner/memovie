import axios from "../axios";

import {
    saveMovies,
    addNewMovie,
    updateSingleMovie,
    clearMovies,
    removeMovie
} from "./state";

const token = localStorage.getItem('user')

// register user
export const registerUser = credentials => dispatch => {
    dispatch({ type: 'RESTART_AUTH_RESPONSE' });
    dispatch({ type: 'LOADING' });
    if (credentials.password < 6) {
        return dispatch({ type: 'SHORT_PASSWORD' })
    }
    axios.post("user/register", {
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        email: credentials.email,
        password: credentials.password
    }).then(res => {
        const { token } = res.data;
        if (token !== null) {
            localStorage.setItem("user", 'Bearer ' + token);
            dispatch({ type: 'SIGNUP_SUCCESS' })
        } else {
            dispatch({ type: 'SIGNUP_ERROR', res })
        }
    }, error => {
        dispatch({ type: 'CODE_ERROR', error });
    });
}

// login user
export const loginUser = (credentials, history) => dispatch => {
    dispatch({ type: 'RESTART_AUTH_RESPONSE' });
    dispatch({ type: 'LOADING' });
    if (credentials.password.length < 6) {
        return dispatch({ type: 'SHORT_PASSWORD' })
    }
    axios.post("user/login", {
        email: credentials.email,
        password: credentials.password
    }).then(res => {
        const { success } = res.data;
        localStorage.setItem('user', 'Bearer ' + res.data.token)
        if (success) {
            const user = {
                token: res.data.token,
                id: res.data.id,
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                email: res.data.email
            }
            dispatch({ type: 'LOGIN_SUCCESS', payload: user })
            setTimeout(() => {
                history.push("/dashboard");
            }, 1000);
        }
        else {
            dispatch({ type: 'LOGIN_ERROR', res })
        }
    })
}

// get movies specific to logged in user
export const getMovies = () => dispatch => {
    const token = localStorage.getItem('user')
    axios.get('user/movies', {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch(saveMovies(res));
    });
}

// add movie specific to a user
export const submitNewMovie = data => dispatch => {
    axios.post("user/movies", {
        movieTitle: data.movieTitle,
        movieDirector: data.movieDirector,
        movieGenre: data.movieGenre,
        movieCast: data.movieCast,
        movieWatched: data.movieWatched
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        const { data: returnedMovie } = data.data;
        const movie = {
            ...returnedMovie,
            movieTitle: returnedMovie.movieTitle,
            movieDirector: returnedMovie.movieDirector === null ? "-" : returnedMovie.movieDirector,
            movieGenre: returnedMovie.movieGenre === null ? "-" : returnedMovie.movieGenre,
            movieCast: returnedMovie.movieCast === null ? "-" : returnedMovie.movieCast
        }
        dispatch(addNewMovie(movie))
    });
}

// add movie specific to a user
export const updateMovie = data => dispatch => {
    const movie = data
    const { id } = movie
    const token = localStorage.getItem('user')
    axios.put(`user/movies/${id}`, {
        movieTitle: movie.movieTitle,
        movieDirector: movie.movieDirector,
        movieGenre: movie.movieGenre,
        movieCast: movie.movieCast,
        movieWatched: movie.movieWatched,
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(updateSingleMovie(data))
    });
}

// delete movie specific to a user
export const deleteMovie = id => dispatch => {
    axios.delete(`user/movies/${id}`, {
        headers: {
            'Authorization': token
        }
    }).then(() => {
        dispatch(removeMovie(id))
    });
}

// reset specific user's movies
export const resetMovies = () => dispatch => {
    axios.delete('user/movies', {
        headers: {
            'Authorization': token
        }
    }).then(() => {
        dispatch(clearMovies())
    });
}