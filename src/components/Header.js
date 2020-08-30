import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Button from './Button';
import AboutDialogue from './Dialogues/AboutDialogue';
import { makeStyles } from '@material-ui/core/styles';
import MovieIcon from '@material-ui/icons/Movie';
import { clearMovies, logoutUser } from '../data/actions/state';

const Header = ({ children }) => {
    const [open, setOpen] = useState(false);
    const dispatchAction = useDispatch()

    // handles opening the add movie form dialogue
    const handleClickOpen = () => {
        setOpen(true);
    };

    // logs user out and resets global state
    const handleLogout = () => {
        dispatchAction(clearMovies(), logoutUser())
        localStorage.removeItem('user')
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
            <div className="header__icon-container">
                <Link
                    className="header__icon-home"
                    to="/dashboard"
                ><MovieIcon className={classes.fontSize44} />
                </Link>
                <Link
                    onClick={handleLogout}
                    className="btn header__logout"
                    to="/"
                >Logout
                </Link>
            </div>
            <h1 className="header__h1" >{children}</h1>
            <nav className="header__nav">
                <Link className="btn" to="/moviepicker">Movie Picker</Link>
                <i className="fas fa-circle"></i>
                <Link className="btn" to="/mymovies">My Movies</Link>
                <i className="fas fa-circle"></i>
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