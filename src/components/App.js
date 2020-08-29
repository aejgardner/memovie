import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Dashboard from './Dashboard';
import { PrivateRoute } from './PrivateRoute';
import Loading from './Loading';
import MyMovies from './MyMovies';
import MoviePicker from './MoviePicker';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <PrivateRoute path="/mymovies" component={MyMovies} />
          <PrivateRoute path="/moviepicker" component={MoviePicker} />
          <Loading>
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Loading>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;