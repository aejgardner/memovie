import React from 'react';
import Button from '../../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';

const PickedMovieDialogue = ({ handleClose, open, pickedMovie }) => (
    <Dialog
        open={open}
        onClose={handleClose}
    >
        <div className="dialogue__container">
            <h1 className="dialogue__heading">Your movie</h1>
            <DialogContent >
                <Paper
                    className="paper"
                    style={{
                        backgroundColor: "#cfe8fc",
                        marginBottom: "1rem",
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                    }}
                    elevation={3}
                >
                    <h1 className="picked-movie__h1">{pickedMovie.movieTitle}</h1>
                    <p className="picked-movie__director">Director: {pickedMovie.movieDirector}</p>
                </Paper>
            </DialogContent>
            <DialogActions style={{ justifyContent: "center" }}>
                <Button
                    className="btn btn-secondary"
                    onClick={handleClose}>Choose again
                </Button>
            </DialogActions>
        </div>
    </Dialog>
);

export default PickedMovieDialogue;