import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { EventDetails } from "./pages/EventDetails";
import { ArtistDetails } from "./pages/ArtistDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/event/:id" exact component={EventDetails} />
          <Route path="/artist/:id" exact component={ArtistDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
