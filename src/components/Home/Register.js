import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../data/actions/api';
import { resetAuthResponse } from '../../data/actions/state';

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
        dispatchAction(resetAuthResponse());
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        dispatchAction(registerUser(state, history));
    }

    const handleChange = e => {
        dispatch({
            type: "onChange",
            payload: {
                field: e.target.id,
                value: e.currentTarget.value
            }
        })
    }

    return (
        <div className="authform__container">
            <div className="authform">
                <div className="authform__background-blue"></div>
                <div className="authform__contents">
                    <header className="authform__header-register" >
                        <h1 className="authform__h1"> <span className="authform__h1-me">Me</span>Movie </h1>
                        <h3 className="authform__sub-heading">Register</h3>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="authform__inputs-container">
                            <input
                                onChange={handleChange}
                                id="firstname"
                                type="text"
                                placeholder="first name"
                            />
                            <input
                                onChange={handleChange}
                                id="lastname"
                                type="text"
                                placeholder="last name"
                            />
                            <input
                                onChange={handleChange}
                                id="email"
                                type="email"
                                placeholder="email"
                            />
                            <input
                                onChange={handleChange}
                                id="password"
                                type="password"
                                placeholder="password (at least 6 characters)"
                            />
                        </div>
                        <button type="submit" className="authform__btn">Register</button>
                    </form>
                </div>
                <footer className="authform__footer">
                    {authResponse !== null ?
                        (<p className="authform__message">{authResponse}</p>)
                        :
                        null
                    }
                    <p className="authform__switch-form">Already have an account? Login <strong ><Link
                        className="authform__switch-form-red" to="/memovie">here</Link></strong></p>
                </footer>
            </div>
        </div>
    )
}

export default Register;