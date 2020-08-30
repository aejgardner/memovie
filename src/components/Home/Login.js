import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetAuthResponse } from '../../data/actions/state';
import { loginUser } from '../../data/actions/api';

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

    const authResponse = useSelector(state => state.auth.authResponse)

    useEffect(() => {
        dispatchAction(resetAuthResponse());
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

    return (
        <div className="authform__container">
            <div className="authform">
                <div className="authform__background-blue"></div>
                <div className="authform__contents-login mb-1">
                    <header className="authform__header-login">
                        <h1 className="authform__h1-login"> <span className="authform__h1-me">Me</span>Movie </h1>
                        <h3 className="authform__sub-heading-login">Your personalised movie hub</h3>
                        <h3 className="authform__login-h3">Login</h3>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="authform__inputs-container-login">
                            <input
                                onChange={handleChange}
                                id="email" type="text"
                                placeholder="email"
                            />
                            <input
                                onChange={handleChange}
                                id="password"
                                type="password"
                                placeholder="password"
                            />
                        </div>
                        <button type="submit" className={"authform__btn" + (authResponse ? " authform__btn-mb" : "")}>Login</button>
                    </form>
                </div>
                <footer className="authform__footer">
                    {authResponse !== null ?
                        (<p className="authform__message">{authResponse}</p>)
                        :
                        null
                    }
                    <p className="authform__switch-form">New to MeMovie? Register <strong ><Link
                        className="authform__switch-form-red" to="/register">here</Link></strong></p>
                </footer>
            </div>
        </div>
    );
};

export default Login;