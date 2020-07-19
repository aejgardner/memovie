import React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const MovieFormInput = ({ value, label, onChange, id, faIcon }) => {
    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        marginBottom: {
            marginBottom: "1rem"
        }
    });

    // storing custom classes in classes variable
    const classes = useStyles();

    return (
        <FormControl>
            <InputLabel htmlFor={id}>{label}<i className={faIcon}></i></InputLabel>
            <Input
                className={classes.marginBottom}
                id={id}
                value={value}
                onChange={onChange}
            />
        </FormControl>
    );
};

export default MovieFormInput;