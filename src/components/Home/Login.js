import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetAuthResponsePerComponent } from '../../data/actions/state';
import { loginUser } from '../../data/actions/api';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '../Button';

const initialState = {
    email: "",
    password: ""
}

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'onChange':
            return {
                ...state,
                [action.payload.field]: action.payload.value
            }
        default: return;
    }
}

const Login = ({ history }) => {
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const dispatchAction = useDispatch();

    const authResponse = useSelector(state => state.authResponse)

    useEffect(() => {
        dispatchAction(resetAuthResponsePerComponent());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchAction(loginUser(state, history));
    }

    const handleChange = (e) => {
        dispatch({
            type: "onChange",
            payload: {
                field: e.currentTarget.id,
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
            backgroundColor: "rgb(114, 215, 255)",
        }
    });

    // storing custom classes in classes variable
    const classes = useStyles();

    return (
        <Paper
            className={classes.paper + " paper authform__paper center"}
            elevation={3}
        >
            <h1 className={classes.mb}>Login Here</h1>

            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="email"
                    label="Email"
                    className={classes.mb}
                    placeholder="Enter your email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    type="email"
                    onChange={handleChange}
                />
                <TextField
                    id="password"
                    label="Password"
                    className={classes.mb}
                    placeholder="Enter your password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                    required
                    onChange={handleChange}
                />
                <Button className="btn mb-1" type="submit">
                    Login
                    </Button>
            </form>
            <b className="mb-1">{authResponse !== null && authResponse}</b>
            <p>New to MeMovie? Register <strong><Link to="/home/register">here</Link></strong></p>
        </Paper>
    );
};

export default Login;