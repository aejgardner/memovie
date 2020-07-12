import React from 'react';
import { Link } from "react-router-dom";
import MovieIcon from '@material-ui/icons/Movie';

const Header = ({ children }) => (
    <header className="header">
        <Link className="header__icon-home" to="/"><MovieIcon style={{ fontSize: 44 }} /></Link>
        <h1 className="header__h1" >{children}</h1>
        <nav className="header__nav">
            <Link className="btn" to="movie-picker">Movie Picker</Link>
            <Link className="btn" to="my-movies">My Movies</Link>
        </nav>
    </header>
);

export default Header;