import { connect } from 'react-redux'
import MovieTable from './MovieTable'

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieTable);