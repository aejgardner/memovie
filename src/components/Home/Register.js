import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../data/actions/api';
import { resetAuthResponsePerComponent } from '../../data/actions/state';
import { makeStyles } from '@material-ui/core/styles';

const initialState = {
    email: "",
    firstname: "",
    lastname: "",
    password: ""
}

const registerReducer = (state, action) => {
    switch (action.type) {
        case 'onChange':
            return {
                ...state,
                [action.payload.field]: action.payload.value
            }
        default: return;
    }
}

const Register = ({ history }) => {
    const [state, dispatch] = useReducer(registerReducer, initialState);

    const dispatchAction = useDispatch();

    const authResponse = useSelector(state => state.auth.authResponse)

    useEffect(() => {
        dispatchAction(resetAuthResponsePerComponent());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchAction(registerUser(state, history));
    }

    const handleChange = (e) => {
        dispatch({
            type: "onChange",
            payload: {
                field: e.target.id,
                value: e.currentTarget.value
            }
        })
    }

    // mui's makestyles hook, allows for custom classnames in material ui components
    const useStyles = makeStyles({
        mb: {
            marginBottom: "1.5rem"
        },
        paper: {
            backgroundColor: "#fff",
        }
    });

    // storing custom classes in classes variable
    const classes = useStyles();

    return (
        <Paper
            className={classes.paper + " paper authform__paper center"}
            elevation={3}
        >
            <h1 className={classes.mb}>Register Here</h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="firstname"
                    label="First name"
                    placeholder="Enter your first name"
                    className={classes.mb}
                    fullWidth
                    variant="outlined"
                    required
                    onChange={handleChange}
                />

                <TextField
                    id="lastname"
                    label="Last name"
                    placeholder="Enter your last name"
                    className={classes.mb}
                    fullWidth
                    variant="outlined"
                    required
                    onChange={handleChange}
                />

                <TextField
                    id="email"
                    label="Email"
                    placeholder="Enter your email"
                    className={classes.mb}
                    fullWidth
                    variant="outlined"
                    required
                    type="email"
                    onChange={handleChange}
                />

                <TextField
                    id="password"
                    label="Password"
                    placeholder="Enter your password"
                    className={classes.mb}
                    fullWidth
                    variant="outlined"
                    type="password"
                    required
                    onChange={handleChange}
                /><br />

                <Button className="btn mb-1" type="submit">
                    Register
                    </Button>
            </form>
            <b className="mb-1">{authResponse !== null && authResponse}</b>
            <p>Already a member? Login <strong><Link to="/home">here</Link></strong></p>
        </Paper>
    )
}

export default Register;