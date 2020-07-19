import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import MovieIcon from '@material-ui/icons/Movie';
import AboutDialogue from './Dialogues/AboutDialogue';
import { makeStyles } from '@material-ui/core/styles';

const Header = ({ children }) => {
    const [open, setOpen] = React.useState(false);

    // handles opening the add movie form dialogue
    const handleClickOpen = () => {
        setOpen(true);
    };

    // handles closing the add movie form dialogue
    const handleClose = () => {
        setOpen(false);
    };

    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        fontSize44: {
            fontSize: 44
        }
    });

    // storing custom classes in classes variable
    const classes = useStyles();

    return (
        <header className="header">
            <Link className="header__icon-home" to="/"><MovieIcon className={classes.fontSize44} /></Link>
            <h1 className="header__h1" >{children}</h1>
            <nav className="header__nav">
                <Link className="btn" to="movie-picker">Movie Picker</Link>
                <Link className="btn" to="my-movies">My Movies</Link>
                <AboutDialogue handleAboutClose={handleClose} aboutDialogueOpen={open} />
                <Button
                    className="btn"
                    onClick={handleClickOpen}
                >About
                    </Button>
            </nav>
        </header>
    );
};

export default Header;