export const randomFilteredMovie = (filters, movies) => {

    // this reducer checks if at least one value of each movie is included in the filters array, if it is, then the movie is added to the accumulator array.
    let filteredMovies = movies.reduce((acc, movie) => {
        if (
            Object.values(movie).some(val => filters.includes(val))
            ||
            movie.movieStarring.some(star => filters.includes(star))
        ) {
            return [...acc, movie]
        }
        return acc
    }, [])

    // return a random index of the new array of movie objects 
    return filteredMovies[Math.floor(Math.random() * filteredMovies.length)]
}