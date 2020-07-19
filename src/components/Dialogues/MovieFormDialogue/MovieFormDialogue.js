import React, { Component } from 'react';
import Button from '../../Button';
import Paper from '@material-ui/core/Paper';
import AlertDialogue from '../../Dialogues/AlertDialogue';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MovieFormInput from '../../MovieFormInput';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    paper: {
        backgroundColor: "#cfe8fc",
        marginBottom: "1rem",
    }
};

class MovieFormDialogue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieTitle: "",
            movieGenre: "",
            movieDirector: "",
            movieStarring: "",
            warningDialogueOpen: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleWarningDialogueOpen = this.handleWarningDialogueOpen.bind(this);
        this.handleWarningDialogueClose = this.handleWarningDialogueClose.bind(this);
    }

    // handles opening warning dialogue if user hasn't entered movie title
    handleWarningDialogueOpen() {
        this.setState({ warningDialogueOpen: true });
    };

    // handles closing warning dialogue
    handleWarningDialogueClose() {
        this.setState({ warningDialogueOpen: false });
    };

    // updates corresponding property to form input user is typing into
    handleChange(e, property) {
        this.setState({ [property]: e.target.value })
    }

    // handles form submission
    handleSubmit(e) {
        e.preventDefault()

        // if user hasn't entered a movie title, warning dialogue shows informing them that they must
        if (this.state.movieTitle === "") {
            this.handleWarningDialogueOpen();
        } else {
            const { movieTitle, movieGenre, movieDirector, movieStarring } = this.state

            let movie = {
                movieTitle: movieTitle,
                movieGenre: movieGenre,
                movieDirector: movieDirector,
                movieStarring: movieStarring.split(", "),
                watched: false
            }

            // dispatch user's form entries to reducer
            this.props.handleSave(movie)

            // reset state once form is submitted
            this.setState({
                movieTitle: "",
                movieGenre: "",
                movieDirector: "",
                movieStarring: ""
            })

            // close dialogue once form is submitted
            this.props.handleMovieFormClose()
        }
    }

    render() {
        const { movieTitle, movieGenre, movieDirector, movieStarring, warningDialogueOpen } = this.state;
        const { handleMovieFormClose, movieFormDialogueOpen, classes } = this.props;

        return (
            <Dialog
                open={movieFormDialogueOpen}
                onClose={handleMovieFormClose}
            >
                <AlertDialogue
                    handleClose={this.handleWarningDialogueClose}
                    open={warningDialogueOpen}
                    dialogueHeading="No movie title"
                    dialogueContent="Please enter a movie title to add a movie"
                />
                <DialogContent>
                    <h1 className="center mf__h1">Add a movie:</h1>
                    <Paper
                        className={classes.paper + " paper"}
                        elevation={3}
                    >
                        <form
                            onSubmit={this.handleSubmit}
                            className="mf__form"
                        >
                            <MovieFormInput
                                label="Movie title"
                                faIcon="fas fa-asterisk fa-1x mf-asterisk"
                                id="title"
                                value={movieTitle}
                                onChange={e => this.handleChange(e, 'movieTitle')}
                            />

                            <MovieFormInput
                                label="Movie director"
                                id="director"
                                value={movieDirector}
                                onChange={e => this.handleChange(e, 'movieDirector')}
                            />

                            <MovieFormInput
                                label="Movie genre"
                                id="genre"
                                value={movieGenre}
                                onChange={e => this.handleChange(e, 'movieGenre')}
                            />

                            <MovieFormInput
                                label="Starring"
                                id="starring"
                                value={movieStarring}
                                onChange={e => this.handleChange(e, 'movieStarring')}
                            />
                            <small className="mf__small">Please put a comma and space between starring names</small>
                            <small className="mf__small">*Required</small>
                            <div className="center">
                                <Button className="btn" onClick={this.handleSubmit}>Add movie</Button>
                            </div>
                        </form>
                    </Paper>
                </DialogContent>
            </Dialog >
        );
    }
}

export default withStyles(styles)(MovieFormDialogue);