import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';

const home = () => (
    <div className="authform__container">
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    </div>
)

export default home;