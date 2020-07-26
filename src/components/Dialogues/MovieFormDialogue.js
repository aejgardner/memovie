import React from 'react';
import { useImmerReducer } from 'use-immer';
import { useDispatch } from 'react-redux';
import { submitMovie } from '../../data/actions';
import Button from '../Button';
import Paper from '@material-ui/core/Paper';
import AlertDialogue from './AlertDialogue';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MovieFormInput from '../MovieFormInput';
import { makeStyles } from '@material-ui/core/styles';

// mui's makestyles hook, allows for custom classnames in material ui components
const useStyles = makeStyles({
    paper: {
        backgroundColor: "#cfe8fc",
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
    }
});

// local reducer that handles updating local state properties (initialised in the initialState variable below)
const movieFormReducer = (draft, action) => {
    switch (action.type) {
        case 'fieldNameChange': {
            draft[action.fieldName] = action.payload;
            return
        }
        case 'warningDialogueOpen': {
            draft.warningDialogueOpen = true;
            return
        }
        case 'warningDialogueClose': {
            draft.warningDialogueOpen = false;
            return
        }
        case 'resetForm': {
            draft.movieTitle = "";
            draft.movieGenre = "";
            draft.movieDirector = "";
            draft.movieStarring = "";
            return;
        }
        default: return;
    }
}

// initial state of component
const initialState = {
    movieTitle: "",
    movieGenre: "",
    movieDirector: "",
    movieStarring: "",
    warningDialogueOpen: false
}

const MovieFormDialogue = ({ handleMovieFormClose, movieFormDialogueOpen }) => {
    const [state, dispatch] = useImmerReducer(movieFormReducer, initialState);
    const { movieTitle, movieGenre, movieDirector, movieStarring, warningDialogueOpen } = state;

    // handles closing warning dialogue
    const handleWarningDialogueClose = () => {
        dispatch({ type: "warningDialogueClose" })
    };

    // creating custom hook for useDispatch which will dispatch a movie to the reducer
    const dispatchMovie = useDispatch();

    // handles form submission
    const handleSubmit = (e) => {
        e.preventDefault()

        // if user hasn't entered a movie title, warning dialogue shows informing them that they must
        if (state.movieTitle === "") {
            dispatch({ type: "warningDialogueOpen" })
        } else {
            const { movieTitle, movieGenre, movieDirector, movieStarring } = state;

            // a movie object is made from the state properties, with an added 'watched' property that is initialised to false
            let movie = {
                movieTitle: movieTitle,
                movieGenre: movieGenre,
                movieDirector: movieDirector,
                movieStarring: movieStarring,
                watched: false
            }

            // dispatch user's form entries to reducer
            dispatchMovie(submitMovie(movie));

            // reset form after submission
            dispatch({ type: "resetForm" })

            // close dialogue once form is submitted
            handleMovieFormClose()
        }
    }

    // storing custom classes in classes variable
    const classes = useStyles();

    return (
        <Dialog
            open={movieFormDialogueOpen}
            onClose={handleMovieFormClose}
        >
            <AlertDialogue
                handleClose={handleWarningDialogueClose}
                open={warningDialogueOpen}
                dialogueHeading="No movie title"
                dialogueContent="Please enter a movie title to add a movie"
            />
            <DialogContent>
                <h1 className="center mf__h1">Add a movie:</h1>
                <Paper
                    className={classes.paper}
                    elevation={3}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="mf__form"
                    >
                        <MovieFormInput
                            label="Movie title"
                            faIcon="fas fa-asterisk fa-1x mf-asterisk"
                            id="title"
                            value={movieTitle}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                fieldName: 'movieTitle',
                                payload: e.currentTarget.value,
                            })}
                        />

                        <MovieFormInput
                            label="Movie director"
                            id="director"
                            value={movieDirector}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                fieldName: 'movieDirector',
                                payload: e.currentTarget.value,
                            })}
                        />

                        <MovieFormInput
                            label="Movie genre"
                            id="genre"
                            value={movieGenre}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                fieldName: 'movieGenre',
                                payload: e.currentTarget.value,
                            })}
                        />

                        <MovieFormInput
                            label="Starring"
                            id="starring"
                            value={movieStarring}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                fieldName: 'movieStarring',
                                payload: e.currentTarget.value,
                            })}
                        />
                        <small className="mf__small">Please put a comma and space between starring names</small>
                        <small className="mf__small">*Required</small>
                        <div className="center">
                            <Button className="btn" onClick={handleSubmit}>Add movie</Button>
                        </div>
                    </form>
                </Paper>
            </DialogContent>
        </Dialog >
    );
}

export default MovieFormDialogue;