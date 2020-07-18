import React from 'react';
import Button from '../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const NoMoviesDialogue = ({ handleClose, open }) => (
    <Dialog
        open={open}
        onClose={handleClose}
    >
        <div className="dialogue__container">
            <h1 className="dialogue__heading">No movies!</h1>
            <DialogContent style={{ padding: "0" }}>
                <h3 className="no-movies__h3">There are no movies matching your search criteria. Please change your filters or add a movie that matches them.</h3>
            </DialogContent>
            <DialogActions style={{ padding: "0" }}>
                <Button
                    className="btn"
                    onClick={handleClose}>Back
                </Button>
            </DialogActions>
        </div>
    </Dialog>
);

export default NoMoviesDialogue;