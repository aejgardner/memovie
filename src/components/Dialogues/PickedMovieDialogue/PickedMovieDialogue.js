import React from 'react';
import Button from '../../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const PickedMovieDialogue = ({ handleClose, open, pickedMovie }) => (
    <Dialog
        open={open}
        onClose={handleClose}
    >
        <div className="dialogue__container">
            <h1 className="dialogue__heading">Your movie</h1>
            <DialogContent style={{ padding: "0" }}>
                <h1 className="picked-movie__h1">{pickedMovie.movieTitle}</h1>
                <p className="picked-movie__director">{pickedMovie.movieDirector}</p>
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