import { connect } from "react-redux";
import PickedMovieDialogue from "./PickedMovieDialogue"

const mapStateToProps = state => {
    return {
        pickedMovie: state.movie.pickedMovie
    };
};

export default connect(mapStateToProps)(PickedMovieDialogue);