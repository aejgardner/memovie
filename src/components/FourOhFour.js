import React from 'react'
import Button from './Button'
import { makeStyles } from '@material-ui/core/styles'

const FourOhFour = ({ history }) => {
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
            <Button className="btn btn-secondary" onClick={history.goBack}>Home</Button>
        </div>
    );
};

export default FourOhFour;