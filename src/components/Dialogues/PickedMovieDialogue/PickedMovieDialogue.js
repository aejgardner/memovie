import React from 'react';
import Button from '../../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const PickedMovieDialogue = ({ handleClose, open, pickedMovie }) => {
    const noMarginTop = {
        marginTop: "0",
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <h1 className="dialogue__heading">Your movie</h1>
            <DialogContent>
                <h1 style={{ fontSize: "4rem", margin: "0" }}>{pickedMovie.movieTitle}</h1>
                <p >{pickedMovie.movieDirector}</p>
            </DialogContent>
            <DialogActions>
                <Button
                    className="btn"
                    furtherStyling={noMarginTop}
                    onClick={handleClose}>Choose again
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PickedMovieDialogue;