import { connect } from 'react-redux'
import Movie from './Movie';
import { removeMovie, updateMovie, updateWatched } from '../../data/actions'

const mapDispatchToProps = dispatch => {
    return {
        removeMovie: index => dispatch(removeMovie(index)),
        saveMovie: (movie, index) => dispatch(updateMovie(movie, index)),
        saveWatched: (index) => dispatch(updateWatched(index))
    }
}

export default connect(null, mapDispatchToProps)(Movie);