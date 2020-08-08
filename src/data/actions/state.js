export const submitMovie = (data) => ({
    type: "submitMovie",
    movie: data
})

export const deleteMovie = (index) => ({
    type: "deleteMovie",
    payload: index
})

export const updateMovie = (data) => ({
    type: "updateMovie",
    movies: data,
})

export const updateWatched = (data) => ({
    type: "updateWatched",
    payload: data
})

export const resetMovies = () => ({
    type: "resetMovies"
})

export const savePickedMovie = (pickedMovie) => ({
    type: "savePickedMovie",
    pickedMovie: pickedMovie
})