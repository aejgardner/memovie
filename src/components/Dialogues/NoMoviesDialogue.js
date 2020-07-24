import React from 'react';
import Button from '../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const NoMoviesDialogue = ({ handleClose, open }) => {
    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        paper: {
            backgroundColor: "#cfe8fc",
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
                <h1 className="dialogue__heading">No movies!</h1>
                <DialogContent>
                    <Paper
                        className={classes.paper + " paper"}
                        elevation={3}
                    >
                        <h3 className="no-movies__h3">There are no movies matching your search criteria. Please change your filters or add a movie that matches them.</h3>
                    </Paper>
                </DialogContent>
                <DialogActions className={classes.paddingNone}>
                    <Button
                        className="btn"
                        onClick={handleClose}>Back
                </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

export default NoMoviesDialogue;