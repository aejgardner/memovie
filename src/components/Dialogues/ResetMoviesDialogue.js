import React from 'react';
import Button from '../Button';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const ResetMoviesDialogue = ({ open, handleClose, handleReset }) => {
    const noMarginTop = {
        marginTop: "0",
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <h1 className="dialogue__heading">Reset your movies?</h1>
            <DialogContent>
                <DialogContentText>
                    <Alert severity="warning">This will clear the table and you will have to start over</Alert>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <div className="center">
                    <Button
                        furtherStyling={noMarginTop}
                        className="btn"
                        onClick={handleClose}>Back
                    </Button>
                    <Button
                        furtherStyling={noMarginTop}
                        className="btn"
                        onClick={handleReset}>Reset
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default ResetMoviesDialogue;