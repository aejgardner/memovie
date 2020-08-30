import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearMovies } from '../data/actions/state'
import { makeStyles } from '@material-ui/core/styles'
import { TweenMax, Power3 } from 'gsap'
import { getMovies } from '../data/actions/api'
import Loading from './Loading'

const Dashboard = () => {
    const user = useSelector(state => state.auth.user)
    const loaded = useSelector(state => state.movie.loaded)
    const dispatchAction = useDispatch()

    // variables storing elements that will be animated
    let meSpan = useRef(null)
    let movieSpan = useRef(null)
    let w = useRef(null)
    let e1 = useRef(null)
    let l = useRef(null)
    let c = useRef(null)
    let o = useRef(null)
    let m = useRef(null)
    let e2 = useRef(null)
    let comma = useRef(null)
    let name = useRef(null)

    // get movies and animate text when component renders
    useEffect(() => {
        dispatchAction(getMovies(user))
        TweenMax.to(
            meSpan,
            2,
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            movieSpan,
            2,
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut,
                delay: .3
            }
        )
        TweenMax.to(
            w,
            2,
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                delay: .4
            }
        )
        TweenMax.to(
            e1,
            2,
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                delay: .6
            }
        )
        TweenMax.to(
            l,
            2,
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                delay: .8
            }
        )
        TweenMax.to(
            c,
            2,
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                delay: 1
            }
        )
        TweenMax.to(
            o,
            2,
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                delay: 1.2
            }
        )
        TweenMax.to(
            m,
            2,
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                delay: 1.4
            }
        )
        TweenMax.to(
            e2,
            2,
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                delay: 1.6
            }
        )
        TweenMax.to(
            comma,
            2,
            {
                opacity: 1,
                x: 0,
                ease: Power3.easeOut,
                delay: 1.8
            }
        )
        TweenMax.to(
            name,
            5,
            {
                opacity: 1,
                ease: Power3.easeOut,
                delay: 2.6
            }
        )
    }
        , [])

    // logs user out and resets global state
    const handleLogout = () => {
        dispatchAction(clearMovies())
        localStorage.removeItem('user')
    };

    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        logoutBtn: {
            position: "absolute",
            top: "2rem",
            left: "2rem"
        }
    });

    // storing custom classes in classes variable
    const classes = useStyles()

    return !loaded ? <Loading /> : (
        <div className="background-image">
            <div className="dshbrd__container">
                <Link
                    onClick={handleLogout}
                    className={"btn header__logout " + classes.logoutBtn}
                    to="/home/login"
                >Logout
            </Link>
                <div className="dshbrd__title-container">
                    <h2
                        ref={el => { meSpan = el }}
                        className="dshbrd__heading dshbrd__heading-blue"
                    >Me
                    </h2>
                    <h2
                        ref={el => { movieSpan = el }}
                        className="dshbrd__heading"
                    >Movie
                    </h2>
                </div>
                <p className="dshbrd__welcome">
                    <span ref={el => { w = el }}>W</span>
                    <span ref={el => { e1 = el }}>e</span>
                    <span ref={el => { l = el }}>l</span>
                    <span ref={el => { c = el }}>c</span>
                    <span ref={el => { o = el }}>o</span>
                    <span ref={el => { m = el }}>m</span>
                    <span ref={el => { e2 = el }}>e</span>
                    <span ref={el => { comma = el }}>,</span>
                    &nbsp;
                    <span ref={el => { name = el }}>{user.firstname}</span>
                    !</p>
                <nav className="dshbrd__btn-group">
                    <Link className="btn dshbrd__btn" to="/moviepicker">Pick me a movie!</Link>
                    <Link className="btn dshbrd__btn" to="/mymovies" >My Movies</Link>
                </nav>
            </div>
        </div>
    );
}

export default Dashboard;