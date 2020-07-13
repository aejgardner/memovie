import React from 'react';
import Button from '../Button';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const AlertDialogue = ({ open, handleClose, dialogueHeading, dialogueContent }) => {
    const noMarginTop = {
        marginTop: "0",
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <h1 className="dialogue__heading">{dialogueHeading}</h1>
            <DialogContent>
                <DialogContentText>
                    <Alert severity="warning">{dialogueContent}</Alert>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button furtherStyling={noMarginTop} onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AlertDialogue;