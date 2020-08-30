import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Dashboard from './Dashboard'
import { PrivateRoute } from './PrivateRoute'
import MyMovies from './MyMovies'
import MoviePicker from './MoviePicker'
import FourOhFour from './FourOhFour'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/memovie" component={Home} />
          <Route path="/memovie/home" component={Home} />
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