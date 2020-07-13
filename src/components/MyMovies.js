import React from 'react';
import Header from './Header';
import Button from './Button';
import MovieTable from './MovieTable';
import MovieFormDialogue from './Dialogues/MovieFormDialogue';
import Container from '@material-ui/core/Container';

const MyMovies = () => {
    const [open, setOpen] = React.useState(false);

    // handles opening the add movie form dialogue
    const handleClickOpen = () => {
        setOpen(true);
    };

    // handles closing the add movie form dialogue
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="background-image">
            <Container width="70%">
                <Header>My Movies</Header>
                <MovieFormDialogue handleMovieFormClose={handleClose} movieFormDialogueOpen={open} />
                <div className="center">
                    <Button
                        className="btn btn-secondary"
                        onClick={handleClickOpen}
                    >Add a movie
                    </Button>
                </div>
                <MovieTable />
            </Container>
        </div>
    );
};

export default MyMovies;