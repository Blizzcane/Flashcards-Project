import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import NotFound from "./NotFound";
import DeckList from "./Decks/DeckList";
import NewDeck from "./Decks/NewDeck";  
import { listDecks } from "../utils/api/index.js";
import DeckRouter from "./Decks/DeckRouter";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [currentDeck, setCurrentDeck] = useState([]);
  const abortController = new AbortController();

  async function loadDecks() {
    try {
      const response = await listDecks(abortController.signal);
      setDecks(response);
      decks.forEach((deck) => console.log(deck));
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }

  useEffect(() => {
    loadDecks();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path="/">
            <DeckList decks={decks} />
          </Route>

          <Route path="/decks/new">
            <NewDeck abortController={abortController}/>
          </Route>

          <Route path="/decks/:deckId/">
            <DeckRouter currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} abortController={abortController}/>
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
