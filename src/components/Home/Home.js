import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';

const home = () => (
    <div className="authform__container background-image">
        <Switch>
            <Route exact path="/home/register" component={Register} />
            <Route path="/home" component={Login} />
        </Switch>
    </div>
)

export default home;