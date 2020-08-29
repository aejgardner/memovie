import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('user')
    return (
        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
                : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />

        )} />
    )
}