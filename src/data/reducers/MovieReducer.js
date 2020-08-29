const initialState = {
    pickedMovie: {},
    movies: []
}

export default (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case "SAVE_MOVIES":
            return {
                ...state,
                movies: [...state.movies, ...payload],
                loaded: true
            }
        case "ADD_MOVIE":
            return {
                ...state,
                movies: [...state.movies, payload]
            }
        case "REMOVE_MOVIE":
            return {
                ...state,
                movies: state.movies.filter(movie => {
                    return movie.id !== payload
                })
            }
        case "UPDATE_MOVIE":
            return {
                ...state,
                movies: state.movies.map(movie => movie.id === payload.id ? payload : movie)
            }
        case "RESET_MOVIES":
            return {
                ...state,
                movies: [],
            }
        case "SAVE_PICKED_MOVIE":
            return {
                ...state,
                pickedMovie: { ...payload }
            }
        default:
            return state
    }
}