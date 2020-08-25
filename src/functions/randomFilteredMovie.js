export const randomFilteredMovie = (filters, movies) => {

    // this reducer checks if at least one value of each movie object is included in the filters array. The movieCast property of each movie, initially a string, is split into an array which can then also be looped through. If a movie's genre or director or is in the filters array, or if the movie contains a star that is in there, then the movie object is added to the accumulator array.
    let filteredMovies = movies.reduce((acc, movie) => {
        if (
            Object.values(movie).some(val => filters.includes(val))
            ||
            movie.movieCast.split(', ').some(star => filters.includes(star))
        ) {
            return [...acc, movie]
        }
        return acc
    }, [])

    // returns a random index of the new array of movie objects 
    return filteredMovies[Math.floor(Math.random() * filteredMovies.length)]
}