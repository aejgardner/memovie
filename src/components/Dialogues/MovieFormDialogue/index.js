import { connect } from 'react-redux'
import MovieFormDialogue from './MovieFormDialogue'
import { submitMovie } from '../../../data/actions'

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSave: movie => dispatch(submitMovie(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFormDialogue);