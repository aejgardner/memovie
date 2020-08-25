import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.user)
    const token = localStorage.getItem('user')
    return (
        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
                : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />

        )} />
    )
}