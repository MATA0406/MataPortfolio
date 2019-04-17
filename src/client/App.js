import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "pages";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
