import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Decks/DeckList";
import NewDeck from "./Decks/NewDeck";
import { createDeck, deleteDeck, listDecks } from "../utils/api/index.js";
import DeckRouter from "./Decks/DeckRouter";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [currentDeck, setCurrentDeck] = useState([]);
  const abortController = new AbortController();
  const signal = abortController.signal;
  const history = useHistory();

  useEffect(() => {
    loadDecks();

    return () => {
      abortController.abort();
    };
  }, []);

  async function loadDecks() {
    try {
      const response = await listDecks(signal);
      setDecks(response);
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }

  //add a new deck to the database and return it's id.
  async function addNewDeck(deck) {
    const newDeck = await createDeck(deck, signal);
    loadDecks();
    return newDeck.id;
  }

  //deletes deck by id and returns home
  async function deleteThisDeck(id) {
    if (
      window.confirm("Delete this deck?\n\nYou will not be able to recover it.")
    ) {
      await deleteDeck(id, signal);
      loadDecks();
      history.push("/");
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path="/">
            <DeckList
              decks={decks}
              abortController={abortController}
              deleteThisDeck={deleteThisDeck} 
            />
          </Route>

          <Route path="/decks/new">
            <NewDeck abortController={abortController} loadDecks={loadDecks} />
          </Route>

          <Route path="/decks/:deckId/">
            <DeckRouter
              currentDeck={currentDeck}
              setCurrentDeck={setCurrentDeck}
              abortController={abortController}
              loadDecks={loadDecks}
              addNewDeck={addNewDeck}
            />
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
