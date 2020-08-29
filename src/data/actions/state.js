export const saveMovies = data => {
    return ({
        type: "SAVE_MOVIES",
        payload: data
    })
}

export const addNewMovie = data => {
    return ({
        type: "ADD_MOVIE",
        payload: data
    })
}

export const removeMovie = id => ({
    type: "REMOVE_MOVIE",
    payload: id
})

export const updateSingleMovie = data => ({
    type: "UPDATE_MOVIE",
    payload: data,
})

export const clearMovies = () => ({
    type: "RESET_MOVIES"
})

export const savePickedMovie = data => ({
    type: "SAVE_PICKED_MOVIE",
    payload: data
})

export const logoutUser = () => ({
    type: "LOGOUT_USER"
})

export const resetAuthResponsePerComponent = () => ({
    type: 'RESTART_AUTH_RESPONSE'
});
