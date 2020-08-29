import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { submitNewMovie } from '../../data/actions/api';
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
const movieFormReducer = (state, action) => {
    switch (action.type) {
        case 'fieldNameChange':
            return {
                ...state,
                movie: {
                    ...state.movie,
                    [action.payload.fieldName]: action.payload.value
                }
            }
        case 'warningDialogueOpen':
            return {
                warningDialogueOpen: true
            }
        case 'warningDialogueClose':
            return {
                ...state,
                warningDialogueOpen: false
            }
        case 'resetForm':
            return {
                ...state,
                movie: {
                    movieTitle: "",
                    movieGenre: "",
                    movieDirector: "",
                    movieCast: "",
                    movieWatched: false,
                }
            }
        default: return;
    }
}

// initial state of component
const initialState = {
    movie: {
        movieTitle: "",
        movieGenre: "",
        movieDirector: "",
        movieCast: "",
        movieWatched: false,
    },
    warningDialogueOpen: false
}

const MovieFormDialogue = ({ handleMovieFormClose, movieFormDialogueOpen }) => {
    const [state, dispatch] = useReducer(movieFormReducer, initialState);
    const {
        movie: {
            movieTitle,
            movieGenre,
            movieDirector,
            movieCast
        },
        warningDialogueOpen
    } = state;
    const dispatchAction = useDispatch();

    // handles closing warning dialogue
    const handleWarningDialogueClose = () => {
        dispatch({ type: "warningDialogueClose" })
    };

    // handles form submission
    const handleSubmit = (e) => {
        e.preventDefault()

        const { movie } = state;

        // if user hasn't entered a movie title, warning dialogue shows informing them that they must
        if (movie.movieTitle === "") {
            dispatch({ type: "warningDialogueOpen" })
        } else {
            // dispatches user's form entries to reducer
            dispatchAction(submitNewMovie(movie));

            // resets form after submission
            dispatch({ type: "resetForm" })

            // closes dialogue once form is submitted
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
                                payload: {
                                    fieldName: 'movieTitle',
                                    value: e.currentTarget.value,
                                }
                            })}
                        />

                        <MovieFormInput
                            label="Movie director"
                            id="director"
                            value={movieDirector}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                payload: {
                                    fieldName: 'movieDirector',
                                    value: e.currentTarget.value,
                                }
                            })}
                        />

                        <MovieFormInput
                            label="Movie genre"
                            id="genre"
                            value={movieGenre}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                payload: {
                                    fieldName: 'movieGenre',
                                    value: e.currentTarget.value,
                                }
                            })}
                        />

                        <MovieFormInput
                            label="Cast"
                            id="cast"
                            value={movieCast}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                payload: {
                                    fieldName: 'movieCast',
                                    value: e.currentTarget.value,
                                }
                            })}
                        />
                        <small className="mf__small">Please put a comma and space between cast names</small>
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