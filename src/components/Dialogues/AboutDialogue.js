import React from 'react';
import Button from '../Button';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const NoMoviesDialogue = ({ handleAboutClose, aboutDialogueOpen }) => (
    <Dialog
        open={aboutDialogueOpen}
        onClose={handleAboutClose}
    >
        <div className="dialogue__container">
            <h1 className="dialogue__heading">About MeMovie</h1>
            <DialogContent style={{ padding: "0" }}>
                <Paper
                    className="mf__paper"
                    style={{
                        backgroundColor: "#cfe8fc",
                        marginBottom: "1rem",
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                    }}
                    elevation={3}
                >
                    <p>MeMovie removes the hours spent staring at Netflix, perplexed at how there can be so many films that you don't want to spend your evening watching.</p><br />

                    <p>With MeMovie, when you hear about a film you would like to see, simply enter at least the title (you can also enter the director, genre and who it stars), and it will be added to your table of movies. When you want to watch one, simply pick from the table, or use the pick movie feature, which will pick you a random movie only from your table.</p><br />

                    <p>You are able to use filters when picking, so if you want ie a random horror movie, providing you have added some movies with horror as their genre, check the horror filter and you will be picked a random horror movie.</p><br />

                    <p>Happy watching!</p>
                </Paper>
            </DialogContent>
            <DialogActions style={{ padding: "0" }}>
                <Button
                    className="btn"
                    onClick={handleAboutClose}>Back
                </Button>
            </DialogActions>
        </div>
    </Dialog>
);

export default NoMoviesDialogue;