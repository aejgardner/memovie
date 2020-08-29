import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearMovies } from '../data/actions/state'
import { makeStyles } from '@material-ui/core/styles'
import { TweenMax, Power3 } from 'gsap'

const Dashboard = () => {
    const user = useSelector(state => state.auth.user);
    const dispatchAction = useDispatch();
    let me = useRef(null)
    let movie = useRef(null)

    useEffect(() => {
        TweenMax.to(
            me,
            2,
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            movie,
            2,
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut,
                delay: .3
            }
        )
    }, [])

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
    const classes = useStyles()

    return (
        <div className="background-image">
            <Link
                onClick={handleLogout}
                className={"btn header__logout " + classes.logoutBtn}
                to="/home"
            >Logout
            </Link>
            <div className="dshbrd__container">
                <div className="dshbrd__title-container">
                    <h2
                        ref={el => { me = el }}
                        className="dshbrd__heading dshbrd__heading-blue"
                    >Me
                    </h2>
                    <h2
                        ref={el => { movie = el }}
                        className="dshbrd__heading"
                    >Movie
                    </h2>
                </div>
                <p className="dshbrd__welcome">Welcome, {user.firstname}!</p>
                <nav className="dshbrd__btn-group">
                    <Link className="btn dshbrd__btn" to="/moviepicker">Pick me a movie!</Link>
                    <Link className="btn dshbrd__btn" to="/mymovies" >My Movies</Link>
                </nav>
            </div>
        </div>
    );
}

export default Dashboard;