import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Dashboard from './Dashboard'
import { PrivateRoute } from './PrivateRoute'
import MyMovies from './MyMovies'
import MoviePicker from './MoviePicker'
import FourOhFour from './FourOhFour'
import Login from './Home/Login'
import Register from './Home/Register'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/memovie" component={Login} />
          <Route path="/memovie/register" component={Register} />
          <PrivateRoute path="/memovie/mymovies" component={MyMovies} />
          <PrivateRoute path="/memovie/moviepicker" component={MoviePicker} />
          <PrivateRoute path="/memovie/dashboard" component={Dashboard} />
          <FourOhFour />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;