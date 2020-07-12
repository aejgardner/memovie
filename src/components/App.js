import React from 'react';
import LandingPage from "./LandingPage";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
    <Route exact path="/" component={LandingPage} />
  </Router>
);

export default App;
