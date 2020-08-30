import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
    <BrowserRouter history={history} >
      <div className="background-image">
        <Switch>
          <Route exact path="/memovie" component={Login} />
          <Route path="/memovie/register" component={Register} />
          <PrivateRoute path="/memovie/mymovies" component={MyMovies} />
          <PrivateRoute path="/memovie/moviepicker" component={MoviePicker} />
          <PrivateRoute path="/memovie/dashboard" component={Dashboard} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;