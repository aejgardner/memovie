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
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute path="/mymovies" component={MyMovies} />
          <PrivateRoute path="/moviepicker" component={MoviePicker} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <FourOhFour />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;