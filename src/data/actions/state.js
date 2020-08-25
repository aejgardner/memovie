export const saveMovies = res => ({
    type: "SAVE_MOVIES",
    payload: res
})

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

export const storeUser = user => ({
    type: "STORE_USER_DETAILS",
    payload: user
})

export const resetAuthResponsePerComponent = () => ({
    type: 'RESTART_AUTH_RESPONSE'
});
