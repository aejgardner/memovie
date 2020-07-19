import React from 'react';
import Button from '../../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const PickedMovieDialogue = ({ handleClose, open, pickedMovie }) => {
    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        paper: {
            backgroundColor: "#cfe8fc",
            padding: "8px 2px"
        },
        berp: {
            justifyContent: "center"
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
                <h1 className="dialogue__heading">Your movie</h1>
                <DialogContent >
                    <Paper
                        classes={{ root: classes.paper }}
                        className="paper"
                        elevation={3}
                    >
                        <h1 className="picked-movie__h1">{pickedMovie.movieTitle}</h1>
                        <p className="picked-movie__director">Director: {pickedMovie.movieDirector}</p>
                    </Paper>
                </DialogContent>
                <DialogActions className={classes.berp}>
                    <Button
                        className="btn btn-secondary"
                        onClick={handleClose}>Choose again
                </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

export default PickedMovieDialogue;