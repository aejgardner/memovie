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
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/mymovies" component={MyMovies} />
      <PrivateRoute path="/moviepicker" component={MoviePicker} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <FourOhFour />
    </BrowserRouter>
  );
}

export default App;