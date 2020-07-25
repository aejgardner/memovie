import React, { Component } from 'react';
import Button from '../Button';
import AlertDialogue from '../Dialogues/AlertDialogue';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from "@material-ui/core/styles";

// styles object that stores classes, gets passed through mui's withstyles higher order component (see export at the bottom). Allows custom classes to be added to mui components
const styles = {
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
};
class Movie extends Component {
    constructor(props) {
        super(props);

        // the first 4 properties here are each movie object's proerties which can be edited
        this.state = {
            movieTitle: this.props.movie.movieTitle,
            movieGenre: this.props.movie.movieGenre,
            movieDirector: this.props.movie.movieDirector,
            movieStarring: this.props.movie.movieStarring,
            editing: false,
            open: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleWatched = this.handleWatched.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // handles opening warning dialogue
    handleDialogueOpen = () => {
        this.setState({ open: true });
    };

    // handles closing warning dialogue
    handleDialogueClose = () => {
        this.setState({ open: false });
    };

    // updates whichever field user is editing
    handleChange(e, property) {
        this.setState({ [property]: e.target.value })
    }

    // allows user to edit fields in table row
    handleEdit() {
        this.setState({ editing: true })
    }

    // checks whether movie title input has text in, if not warning dialogue shows, if so the edits are sent to the reducer and saved
    handleUpdate(index) {
        if (this.state.movieTitle === "") {
            this.handleDialogueOpen();
        } else {
            this.setState({ editing: false })

            let movie = {
                movieTitle: this.state.movieTitle,
                movieGenre: this.state.movieGenre,
                movieDirector: this.state.movieDirector,
                movieStarring: this.state.movieStarring,
                watched: this.state.watched
            }

            this.props.saveMovie(movie, index)
        }
    }

    // toggles the boolean for the watched property for the specific movie
    handleWatched(index) {
        // dispatch updated watched status to reducer
        this.props.saveWatched(index)
    }

    // deletes specific movie user has clicked delete for
    handleDelete(index) {
        this.props.removeMovie(index)
    }

    render() {
        const { movieTitle, movieGenre, movieDirector, movieStarring, editing, open } = this.state;
        const { movie, index, classes } = this.props;

        // background turns green if user has clicked 'watched'
        const watchedBackground = movie.watched ? classes.greenBackground : "";

        // these ternarys mean that a hyphen is rendered in the table if user leaves any form field empty. There isn't one for movie title as user cannot leave the title blank
        const genreContent = movie.movieGenre === "" ? "-" : movie.movieGenre;
        const directorContent = movie.movieDirector === "" ? "-" : movie.movieDirector;
        const titleContent = movie.movieTitle;

        // movie stars property (an array) is joined back into a string, then checked to see if that string is empty. If so, "-" is displayed
        let starringContent = movie.movieStarring;
        starringContent = starringContent === "" ? "-" : starringContent;

        return (
            <>
                <AlertDialogue
                    handleClose={this.handleDialogueClose}
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
                                onChange={e => this.handleChange(e, 'movieTitle')}
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
                                onChange={e => this.handleChange(e, 'movieDirector')}
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
                                onChange={e => this.handleChange(e, 'movieGenre')}
                            />)
                            :
                            (genreContent)
                        }
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                        {editing ?
                            (<TextField
                                value={movieStarring}
                                onChange={e => this.handleChange(e, 'movieStarring')}
                            />)
                            :
                            (starringContent)
                        }
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                        <div className="flex__align__center">
                            <Button
                                className={classes.watchedButton + " btn movie-table__btn flex-align-center"}
                                onClick={() => this.handleWatched(index)}>Watched
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
                            (<Button className="btn movie-table__btn" onClick={() => this.handleUpdate(index)}><DoneIcon /></Button>)
                            :
                            (<Button className="btn movie-table__btn" onClick={this.handleEdit}><EditIcon /></Button>)
                        }
                    </TableCell>
                    <TableCell align="center">
                        <Button
                            className="btn movie-table__btn"
                            onClick={() => this.handleDelete(index)}
                        >
                            <DeleteIcon />
                        </Button>
                    </TableCell>
                </TableRow>
            </>
        );
    }
}

export default withStyles(styles)(Movie);