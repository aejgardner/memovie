import React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';

const MovieFormInput = ({ value, label, onChange, id, faIcon }) => {
    return (
        <FormControl>
            <InputLabel htmlFor={id}>{label}<i className={faIcon}></i></InputLabel>
            <Input
                style={{ marginBottom: "1rem" }}
                id={id}
                value={value}
                onChange={onChange}
            />
        </FormControl>
    );
};

export default MovieFormInput;