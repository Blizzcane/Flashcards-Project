import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import NotFound from "./NotFound";
import Decks from "./Decks/Decks";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path="/">
            <Decks />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
