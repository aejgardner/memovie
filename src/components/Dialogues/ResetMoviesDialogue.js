import React from 'react';
import Button from '../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

const ResetMoviesDialogue = ({ open, handleClose, handleReset }) => (
    <Dialog
        open={open}
        onClose={handleClose}
    >
        <div className="dialogue__container">
            <h1 className="dialogue__heading">Reset your movies?</h1>
            <DialogContent style={{ padding: "0" }}>
                <div className="flex-align-center dialogue__content-alert">
                    <ReportProblemOutlinedIcon />
                    <p>This will clear the table and you will have to start over</p>
                </div>
            </DialogContent>
            <DialogActions style={{ padding: "0" }}>
                <div className="center">
                    <Button
                        className="btn"
                        onClick={handleClose}>Back
                    </Button>
                    <Button
                        className="btn"
                        onClick={handleReset}>Reset
                    </Button>
                </div>
            </DialogActions>
        </div>
    </Dialog>
);

export default ResetMoviesDialogue;