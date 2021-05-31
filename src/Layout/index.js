import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Decks/DeckList";
import NewDeck from "./Decks/NewDeck";
import {
  createCard,
  createDeck,
  deleteCard,
  deleteDeck,
  listDecks,
  readDeck,
  updateDeck,
} from "../utils/api/index";
import DeckRouter from "./Decks/DeckRouter";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [currentDeck, setCurrentDeck] = useState([]);
  //used to re-render components
  const [numOfDecks, setNumOfDecks] = useState(0);
  const [numOfCards, setNumOfCards] = useState(0);

  const [cards, setCards] = useState([]);
  const abortController = new AbortController();
  const signal = abortController.signal;
  const history = useHistory();

  const updateCardCount = (number) => {
    setNumOfCards(() => numOfCards + number);
  };

  const updateDeckCount = (number) => {
    setNumOfDecks(() => numOfDecks + number);
  };

  useEffect(() => {
    loadDecks();

    return () => {
      abortController.abort();
    };
  }, [numOfDecks]);

  async function loadDecks() {
    try {
      const response = await listDecks(signal);
      setDecks(() => response);
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }

  //add a new deck to the database and return it's id.
  async function addNewDeck(deck) {
    try {
      const newDeck = await createDeck(deck, signal);
      updateDeckCount(1);
      return newDeck.id;
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }

  //updates deck
  async function updateThisDeck(updatedDeck) {
    try {
      updateDeck(updatedDeck, signal);
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }

  //deletes deck by id and returns home
  async function deleteThisDeck(id) {
    try {
      if (
        window.confirm(
          "Delete this deck?\n\nYou will not be able to recover it."
        )
      ) {
        await deleteDeck(id, signal);
        updateDeckCount(-1);
        history.push("/");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }

  //deletes card by id
  async function deleteThisCard(id) {
    try {
      if (
        window.confirm(
          "Delete this card?\n\nYou will not be able to recover it."
        )
      ) {
        await deleteCard(id, signal);
        updateCardCount(-1);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }
  async function getDeck(id) {
    try {
      console.log("loadCurrentDeck");
      const deck = await readDeck(id, signal);
      setCurrentDeck(deck);
      setCards(deck.cards);
      console.log("index",currentDeck);
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }
  async function addCard(deckId, card) {
    console.log("deckId", deckId);
    try {
      createCard(deckId, card, signal);
      updateCardCount(1);
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
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
              addNewDeck={addNewDeck}
              addCard={addCard}
              updateThisDeck={updateThisDeck}
              history={history}
            />
          </Route>

          <Route path="/decks/new">
            <NewDeck
              addNewDeck={addNewDeck}
              abortController={abortController}
              loadDecks={loadDecks}
              addCard={addCard}
              history={history}
              cards={cards}
              currentDeck={currentDeck}
            />
          </Route>

          <Route path="/decks/:deckId/">
            <DeckRouter
              currentDeck={currentDeck}
              setCurrentDeck={setCurrentDeck}
              deleteThisDeck={deleteThisDeck}
              updateThisDeck={updateThisDeck}
              addCard={addCard}
              updateCardCount={updateCardCount}
              abortController={abortController}
              loadDecks={loadDecks}
              numOfCards={numOfCards}
              cards={cards}
              getDeck={getDeck}
              setCards={setCards}
              history={history}
              addNewDeck={addNewDeck}
              deleteThisCard={deleteThisCard}
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
