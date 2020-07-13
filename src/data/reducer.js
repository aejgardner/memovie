// import initial from "./initial";

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

const reducer = (state, action) => {
    switch (action.type) {
        case "deleteMovie": return deleteMovie(state, action);
        case "updateMovie": return updateMovie(state, action);
        default: return state;
    }
};

export default reducer;