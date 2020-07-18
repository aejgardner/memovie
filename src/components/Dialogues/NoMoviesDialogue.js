import React from 'react';
import Button from '../Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';

const NoMoviesDialogue = ({ handleClose, open }) => (
    <Dialog
        open={open}
        onClose={handleClose}
    >
        <div className="dialogue__container">
            <h1 className="dialogue__heading">No movies!</h1>
            <DialogContent style={{ padding: "0" }}>
                <Paper className="paper"
                    style={{
                        backgroundColor: "#cfe8fc",
                        marginBottom: "0.5rem",
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                    }}
                    elevation={3}>
                    <h3 className="no-movies__h3">There are no movies matching your search criteria. Please change your filters or add a movie that matches them.</h3>
                </Paper>
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