import { connect } from "react-redux";
import MoviePicker from "./MoviePicker";
import { savePickedMovie } from "../../data/actions/state";

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handlePickedMovie: pickedMovie => dispatch(savePickedMovie((pickedMovie)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePicker);