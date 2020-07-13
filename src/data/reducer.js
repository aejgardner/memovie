// import initial from "./initial";

// updates a movie's details
const updateMovie = (state, { updatedMovie, index }) => {
    return {
        ...state,
        movies: state.movies.map((movie, i) => i === index ? updatedMovie : movie)
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "updateMovie": return updateMovie(state, action);
        default: return state;
    }
};

export default reducer;