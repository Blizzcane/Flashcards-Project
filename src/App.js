import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout"; 

/**
 * App is a wrapper for <Layout>, you should not need to change this file. test
 */

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
