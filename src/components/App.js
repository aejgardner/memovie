import React from 'react';
import LandingPage from "./LandingPage";
import MyMovies from "./MyMovies";
import MoviePicker from "./MoviePicker";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/my-movies" component={MyMovies} />
    <Route exact path="/movie-picker" component={MoviePicker} />
  </Router>
);

export default App;
