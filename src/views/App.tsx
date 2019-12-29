import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeView from "./HomeView";

import "./App.scss";

const App: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={HomeView} />
        <Route render={() => <div>Page not found!</div>} />
      </Switch>
    </Router>
  );
};

export default App;
