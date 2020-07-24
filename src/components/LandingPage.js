import React from 'react';
import { Link } from "react-router-dom";

const LandingPage = () => (
    <div className="background-image">
        <div className="lp__container">
            <h2 className="lp__heading" ><span className="lp__heading-blue">Me</span>Movie</h2>
            <h2 className="lp__sub-heading">Your personalised movie hub</h2>
            <nav className="lp__btn-group">
                <Link className="btn lp__btn" to="movie-picker">Pick me a movie!</Link>
                <Link className="btn lp__btn" to="my-movies">My Movies</Link>
            </nav>
        </div>
    </div>
);

export default LandingPage;