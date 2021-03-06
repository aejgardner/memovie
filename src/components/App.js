import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import { PrivateRoute } from './PrivateRoute'
import MyMovies from './MyMovies'
import MoviePicker from './MoviePicker'
import FourOhFour from './FourOhFour'
import Login from './Home/Login'
import Register from './Home/Register'
// History file imported to use ReactRouter's history functionality
import history from "../history"

function App() {
  return (
    <Router history={history} >
      <div className="background-image">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/mymovies" component={MyMovies} />
          <PrivateRoute path="/moviepicker" component={MoviePicker} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;