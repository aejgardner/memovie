import React from 'react';
import Button from '../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const AlertDialogue = ({ open, handleClose, dialogueHeading, dialogueContent }) => {
    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        paper: {
            backgroundColor: "rgba(255, 191, 102, 0.9)",
            marginBottom: "0.5rem",
            paddingTop: "2rem",
            paddingBottom: "2rem",
        },
        paddingNone: {
            padding: "0"
        }
    });

    // storing custom classes in classes variable
    const classes = useStyles();

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <div className="dialogue__container">
                <h1 className="dialogue__heading">{dialogueHeading}</h1>
                <DialogContent className={classes.paddingNone}>
                    <Paper
                        className={classes.paper + " paper"}
                        elevation={3}
                    >
                        <div className="flex-align-center dialogue__content-alert">
                            <ReportProblemOutlinedIcon />
                            <p>{dialogueContent}</p>
                        </div>
                    </Paper>
                </DialogContent>
                <DialogActions className={classes.paddingNone}>
                    <Button className="btn" onClick={handleClose}>Ok</Button>
                </DialogActions>
            </div>
        </Dialog >
    );
};

export default AlertDialogue;