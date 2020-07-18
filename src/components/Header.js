import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import MovieIcon from '@material-ui/icons/Movie';
import AboutDialogue from './Dialogues/AboutDialogue';

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

    return (
        <header className="header">
            <Link className="header__icon-home" to="/"><MovieIcon style={{ fontSize: 44 }} /></Link>
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