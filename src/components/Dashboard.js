import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearMovies } from '../data/actions/state';
import { makeStyles } from '@material-ui/core/styles';

const Dashboard = () => {
    const user = useSelector(state => state.auth.user);
    const dispatchAction = useDispatch();

    // logs user out and resets global state
    const handleLogout = () => {
        dispatchAction(clearMovies())
        localStorage.removeItem('user')
    };

    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        logoutBtn: {
            marginLeft: "2rem"
        }
    });

    // storing custom classes in classes variable
    const classes = useStyles();

    return (
        <div className="background-image">
            <Link
                onClick={handleLogout}
                className={"btn header__logout " + classes.logoutBtn}
                to="/home"
            >Logout
            </Link>
            <div className="dashboard__container">
                <h2 className="dashboard__heading" ><span className="dashboard__heading-blue">Me</span>Movie</h2>
                <p className="dashboard__welcome">Welcome, {user.firstname}!</p>
                <nav className="dashboard__btn-group">
                    <Link className="btn dashboard__btn" to="/moviepicker">Pick me a movie!</Link>
                    <Link className="btn dashboard__btn" to="/mymovies" >My Movies</Link>
                </nav>
            </div>
        </div>
    );
}

export default Dashboard;