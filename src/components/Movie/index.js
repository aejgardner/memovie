import { connect } from 'react-redux'
import Movie from './Movie';
import { updateMovie } from '../../data/actions'

const mapDispatchToProps = dispatch => {
    return {
        saveMovie: (movie, index) => dispatch(updateMovie(movie, index))
    }
}

export default connect(null, mapDispatchToProps)(Movie);