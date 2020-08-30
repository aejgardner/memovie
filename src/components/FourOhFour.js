import React from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'

const FourOhFour = () => {
    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        h1: {
            textAlign: "center",
            fontSize: "5rem",
            marginBottom: "2rem"
        }
    })

    // storing custom classes in classes variable
    const classes = useStyles()

    return (
        <div className="dshbrd__container">
            <h1 className={classes.h1}>Oops, page not found</h1>
            <Link className="btn btn-secondary" to="/">Home</Link>
        </div>
    );
};

export default FourOhFour;

//   "homepage": "https://aejgardner.github.io/memovie/",