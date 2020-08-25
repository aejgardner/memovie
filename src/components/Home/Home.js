import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';

const home = () => (
    <div className="authform__container home-image">
        <h1 className="authform__h1">Welcome to MeMovie!</h1>
        <h2 className="authform__sub-heading">Your personalised movie hub</h2>
        <Switch>
            <Route exact path="/home/register" component={Register} />
            <Route path="/home" component={Login} />
        </Switch>
    </div>
)

export default home;