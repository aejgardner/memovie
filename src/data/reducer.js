import initial from "./initial";

// adds submitted movies to movies array in initial state
const submitMovie = (state, action) => {
    return {
        ...state,
        movies: [...state.movies, action.movie]
    }
}

// deletes specific movie from user's movie table
const deleteMovie = (state, action) => {
    return {
        ...state,
        movies: state.movies.filter((_, index) => {
            return index !== action.index
        })
    }
}

// updates a movie's details
const updateMovie = (state, { updatedMovie, index }) => {
    return {
        ...state,
        movies: state.movies.map((movie, i) => i === index ? updatedMovie : movie)
    }
}

// updates a movie's watched property to opposite boolean
const updateWatched = (state, { index }) => {
    return {
        ...state,
        movies: state.movies.map((movie, i) => i === index ? { ...movie, watched: !movie.watched } : movie)
    }
}

// resets user's movie table
const resetMovies = () => {
    return {
        ...initial
    }
}

// saves randomly picked movie to global state so it can then be rendered in the picked movie dialogue
const savePickedMovie = (state, action) => {
    return {
        ...state,
        pickedMovie: { ...action.pickedMovie }
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "submitMovie": return submitMovie(state, action);
        case "deleteMovie": return deleteMovie(state, action);
        case "updateMovie": return updateMovie(state, action);
        case "updateWatched": return updateWatched(state, action);
        case "resetMovies": return resetMovies(state, action);
        case "savePickedMovie": return savePickedMovie(state, action);
        default: return state;
    }
};

export default reducer;