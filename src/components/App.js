import React from 'react';
import LandingPage from "./LandingPage";
import MyMovies from "./MyMovies";
import MoviePicker from "./MoviePicker";
import FourOhFour from "./FourOhFour";

import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/my-movies" component={MyMovies} />
      <Route path="/movie-picker" component={MoviePicker} />
      <FourOhFour />
    </Switch>
  </Router>
);

export default App;
