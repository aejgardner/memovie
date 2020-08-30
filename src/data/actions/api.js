import axios from "../axios";
import hyphenOrContent from '../../functions/hyphenOrContent/hyphenOrContent'
import {
    saveMovies,
    addNewMovie,
    updateSingleMovie,
    clearMovies,
    removeMovie
} from "./state";
const token = localStorage.getItem('user')

// register user
export const registerUser = (credentials, history) => dispatch => {
    dispatch({ type: 'RESTART_AUTH_RESPONSE' });
    dispatch({ type: 'LOADING' });
    if (credentials.password < 6) {
        return dispatch({ type: 'SHORT_PASSWORD' })
    }
    axios.post("user/register", credentials).then(res => {
        const { token } = res.data;
        if (token !== null) {
            localStorage.setItem("user", 'Bearer ' + token);
            dispatch({ type: 'SIGNUP_SUCCESS', payload: res.data })
            setTimeout(() => {
                history.push("/dashboard");
            }, 1000);
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
        const { data: user, data: { success } } = res;
        localStorage.setItem('user', 'Bearer ' + user.token)
        if (success) {
            const userObj = {
                token: user.token,
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            }
            dispatch({ type: 'LOGIN_SUCCESS', payload: userObj })
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
    axios.get(`user/movies`, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        let movies = res.data.data.map(movie => hyphenOrContent(movie))
        dispatch(saveMovies(movies));
    });
}

// add movie specific to a user
export const submitNewMovie = data => dispatch => {
    axios.post(`user/movies`, data, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        const { data: returnedMovie } = data.data;
        dispatch(addNewMovie(hyphenOrContent(returnedMovie)))
    });
}

// add movie specific to a user
export const updateMovie = data => dispatch => {
    const { id } = data
    const token = localStorage.getItem('user')
    axios.put(`user/movies/${id}`, data, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(updateSingleMovie(data.data.data))
    });
}

// delete movie specific to a user
export const deleteMovie = data => dispatch => {
    const id = data
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
    axios.delete(`user/movies`, {
        headers: {
            'Authorization': token
        }
    }).then(() => {
        dispatch(clearMovies())
    });
}