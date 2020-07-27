import React from 'react';
import { useImmerReducer } from 'use-immer';
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { updateMovie, removeMovie, updateWatched } from '../data/actions';
import Button from './Button';
import AlertDialogue from './Dialogues/AlertDialogue';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// styles object that stores classes, gets passed through mui's withstyles higher order component (see export at the bottom). Allows custom classes to be added to mui components
const useStyles = makeStyles({
    transition: {
        transition: "all 0.3s linear"
    },
    greenBackground: {
        backgroundColor: "#8affa9"
    },
    tableCell: {
        fontSize: "1rem"
    },
    watchedButton: {
        fontFamily: "Roboto, arial",
        fontSize: "1rem",
        overflowX: "auto"
    },
    watchedIcon: {
        marginLeft: "0.4rem"
    }
});

// local reducer that handles updating local state properties (initialised in the initialState variable below)
const movieReducer = (draft, action) => {
    switch (action.type) {
        case 'fieldNameChange': {
            draft[action.fieldName] = action.payload;
            return
        }
        case 'editMovie': {
            draft.editing = true;
            return
        }
        case 'saveMovie': {
            draft.editing = false;
            return
        }
        case 'dialogueOpen': {
            draft.open = true;
            return
        }
        case 'dialogueClose': {
            draft.open = false;
            return
        }
        default: return;
    }
}

const Movie = ({ index, movie }) => {
    // initial state of component
    const initialState = {
        movieTitle: movie.movieTitle,
        movieGenre: movie.movieGenre,
        movieDirector: movie.movieDirector,
        movieStarring: movie.movieStarring,
        watched: movie.watched,
        editing: false,
        open: false
    }

    const [state, dispatch] = useImmerReducer(movieReducer, initialState);
    const { movieTitle, movieGenre, movieDirector, movieStarring, editing, open } = state;

    // checks whether movie title input has text in, if not the warning dialogue shows, if so the updated movie details are dispatched to the reducer and saved
    const dispatchUpdatedMovie = useDispatch();
    const handleUpdate = (index) => {
        if (state.movieTitle === "") {
            dispatch({ type: "dialogueOpen" })
        } else {

            let movie = {
                movieTitle: state.movieTitle,
                movieGenre: state.movieGenre,
                movieDirector: state.movieDirector,
                movieStarring: state.movieStarring,
                watched: state.watched
            }

            dispatchUpdatedMovie(updateMovie(movie, index));

            // set editing property back to false
            dispatch({ type: "saveMovie" })
        }
    }

    // toggles the boolean for the watched property for the specific movie
    const dispatchWatchedMovie = useDispatch();
    const handleWatched = (index) => {
        dispatchWatchedMovie(updateWatched(index));
    }

    // deletes specific movie 
    const dispatchDeleteMovie = useDispatch();
    const handleDelete = (index) => {
        dispatchDeleteMovie(removeMovie(index));
    }

    // these ternarys mean that a hyphen is rendered in the table if user leaves any form field empty. There isn't one for movie title as user cannot leave the title blank
    const directorContent = movie.movieDirector === "" ? "-" : movie.movieDirector;
    const genreContent = movie.movieGenre === "" ? "-" : movie.movieGenre;
    const starringContent = movie.movieStarring === "" ? "-" : movie.movieStarring;
    const titleContent = movie.movieTitle;

    // storing custom classes in classes variable
    const classes = useStyles();

    // background turns green if user has clicked 'watched'
    const watchedBackground = movie.watched ? classes.greenBackground : "";

    return (
        <>
            <AlertDialogue
                handleClose={() => dispatch({ type: 'dialogueClose' })}
                open={open}
                dialogueHeading="No movie title"
                dialogueContent="Please include a movie title"
            />
            <TableRow className={watchedBackground + " " + classes.transition}>
                <TableCell className={classes.tableCell} align="center">
                    {editing
                        ?
                        (<TextField
                            value={movieTitle}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                fieldName: 'movieTitle',
                                payload: e.currentTarget.value,
                            })}
                        />)
                        :
                        (titleContent)
                    }
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                    {editing
                        ?
                        (<TextField
                            value={movieDirector}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                fieldName: 'movieDirector',
                                payload: e.currentTarget.value,
                            })}
                        />)
                        :
                        (directorContent)
                    }
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                    {editing
                        ?
                        (<TextField
                            value={movieGenre}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                fieldName: 'movieGenre',
                                payload: e.currentTarget.value,
                            })}
                        />)
                        :
                        (genreContent)
                    }
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                    {editing ?
                        (<TextField
                            value={movieStarring}
                            onChange={e => dispatch({
                                type: 'fieldNameChange',
                                fieldName: 'movieStarring',
                                payload: e.currentTarget.value,
                            })}
                        />)
                        :
                        (starringContent)
                    }
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                    <div className="flex__align__center">
                        <Button
                            className={classes.watchedButton + " btn movie-table__btn flex-align-center"}
                            onClick={() => handleWatched(index)}>Watched
                {movie.watched
                                ?
                                <CheckCircleIcon className={classes.watchedIcon} />
                                :
                                <CancelIcon className={classes.watchedIcon} />
                            }
                        </Button>
                    </div>
                </TableCell>
                <TableCell align="center">
                    {editing
                        ?
                        (<Button
                            className="btn movie-table__btn"
                            onClick={() => handleUpdate(index)}>
                            <DoneIcon />
                        </Button>)
                        :
                        (<Button
                            className="btn movie-table__btn"
                            onClick={() => dispatch({ type: 'editMovie' })}>
                            <EditIcon />
                        </Button>)
                    }
                </TableCell>
                <TableCell align="center">
                    <Button
                        className="btn movie-table__btn"
                        onClick={() => handleDelete(index)}
                    >
                        <DeleteIcon />
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default Movie;