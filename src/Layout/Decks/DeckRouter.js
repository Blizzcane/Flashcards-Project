import React, { useEffect } from "react";
import { Route, Switch, useParams } from "react-router";
import { readDeck } from "../../utils/api/index";
import Study from "./Study";
import DeckViewer from "./DeckViewer";
import EditDeck from "./EditDeck";
import CardEditor from "../Cards/CardEditor";

//Switchboard for deck routes

function DeckRouter({
  currentDeck,
  setCurrentDeck,
  abortController,
  addNewDeck,
  setCards,
  cards,
}) {
  const { deckId } = useParams();
  useEffect(() => {
    console.log("useEffect");
    getDeck(deckId);
    return () => {
      abortController.abort();
    };
  }, [deckId]);

  async function getDeck(id) {
    try {
      const deck = await readDeck(id, abortController.signal);
      console.log("deck:", deck);
      setCurrentDeck(deck);
      console.log("Current Deck:", currentDeck);
      setCards(currentDeck.cards);
      console.log("Cards:", cards);
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }

  return (
    <Switch>
      <Route path="/decks/:deckId/study">
        <Study currentDeck={currentDeck} cards={cards} />
      </Route>
      <Route path="/decks/:deckId/edit">
        <EditDeck
          abortController={abortController}
          currentDeck={currentDeck}
          cards={cards}
          addNewDeck={addNewDeck}
        />
      </Route>
      <Route path="/decks/:deckId/cards">
        <CardEditor
          currentDeck={currentDeck}
          cards={cards}
          abortController={abortController}
        />
      </Route>
      <Route path="/decks/:deckId">
        <DeckViewer
          currentDeck={currentDeck}
          setCurrentDeck={setCurrentDeck}
          cards={cards}
          abortController={abortController}
        />
      </Route>
    </Switch>
  );
}

export default DeckRouter;
