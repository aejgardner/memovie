export const submitMovie = (movie) => ({
    type: "submitMovie",
    movie: movie
})

export const removeMovie = (index) => ({
    type: "deleteMovie",
    index: index
})

export const updateMovie = (movie, index) => ({
    type: "updateMovie",
    updatedMovie: movie,
    index: index
})

export const updateWatched = (index) => ({
    type: "updateWatched",
    index: index
})

export const resetMovies = () => ({
    type: "resetMovies"
})

export const savePickedMovie = (pickedMovie) => ({
    type: "savePickedMovie",
    pickedMovie: pickedMovie
})