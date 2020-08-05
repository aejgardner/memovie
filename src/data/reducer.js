import initial from "./initial";

// adds submitted movies to movies array in initial state
const submitMovie = (state, { movie }) => {
    return {
        ...state,
        movies: [...state.movies, movie]
    }
}

// deletes specific movie from user's movie table
const deleteMovie = (state, action) => {
    const { payload: index } = action;
    console.log(index)
    return {
        ...state,
        movies: state.movies.filter((_, i) => {
            return i !== index
        })
    }
}

// updates a movie's details
const updateMovie = (state, { movies }) => {
    return {
        ...state,
        movies: movies
    }
}

// updates a movie's watched property to opposite boolean
const updateWatched = (state, action) => {
    const { payload: { movieWatched, tableData: { id: index } } } = action;
    return {
        ...state,
        movies: state.movies.map((movie, i) => i === index ? { ...movie, movieWatched: !movieWatched } : movie)
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