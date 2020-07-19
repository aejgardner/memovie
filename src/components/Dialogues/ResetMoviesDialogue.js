import React from 'react';
import Button from '../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const ResetMoviesDialogue = ({ open, handleClose, handleReset }) => {
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
                <h1 className="dialogue__heading">Reset your movies?</h1>
                <DialogContent className={classes.paddingNone}>
                    <Paper className={classes.paper + " paper"}
                        elevation={3}>
                        <div className="flex-align-center dialogue__content-alert">
                            <ReportProblemOutlinedIcon />
                            <p>This will clear the table and you will have to start over</p>
                        </div>
                    </Paper>
                </DialogContent>
                <DialogActions className={classes.paddingNone}>
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
};

export default ResetMoviesDialogue;