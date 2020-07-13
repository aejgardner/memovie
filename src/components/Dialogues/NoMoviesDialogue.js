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
        <h1 className="dialogue-title">No movies!</h1>
        <DialogContent>
            <h3 style={{ margin: 0 }}>There are no movies matching your search criteria. Please change your filters or add a movie that matches them.</h3>
        </DialogContent>
        <DialogActions>
            <Button className="btn" onClick={handleClose}>Back</Button>
        </DialogActions>
    </Dialog>
);

export default NoMoviesDialogue;