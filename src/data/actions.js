export const removeMovie = (index) => ({
    type: "deleteMovie",
    index: index
})

export const updateMovie = (movie, index) => ({
    type: "updateMovie",
    updatedMovie: movie,
    index: index
})

export const resetMovies = () => ({
    type: "resetMovies"
})