import React from 'react';
import Button from '../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

const AlertDialogue = ({ open, handleClose, dialogueHeading, dialogueContent }) => (
    <Dialog
        open={open}
        onClose={handleClose}
    >
        <div className="dialogue__container">
            <h1 className="dialogue__heading">{dialogueHeading}</h1>
            <DialogContent style={{ padding: "0" }}>
                <div className="flex-align-center dialogue__content-alert">
                    <ReportProblemOutlinedIcon />
                    <p>{dialogueContent}</p>
                </div>
            </DialogContent>
            <DialogActions style={{ padding: "0" }}>
                <Button className="btn" onClick={handleClose}>Ok</Button>
            </DialogActions>
        </div>
    </Dialog >
);

export default AlertDialogue;