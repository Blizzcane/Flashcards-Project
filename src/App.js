import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Deck from "./Decks";
import Cards from "./Cards";

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
        <Route path="/decks/:deckId">
          <Deck />
        </Route>
        <Route path="/decks/:deckId/cards/new	">
          <Cards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
