import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';

const home = () => (
    <div className="authform__container background-image">
        <Switch>
<<<<<<< HEAD
            <Route path="/" component={Login} />
            <Route path="/register" component={Register} />
=======
            <Route path="/memovie/home" component={Login} />
            <Route path="/memovie/home/register" component={Register} />
>>>>>>> dbf355afd0e695c51defa2b67d5846aa4600fdd9
        </Switch>
    </div>
)

export default home;