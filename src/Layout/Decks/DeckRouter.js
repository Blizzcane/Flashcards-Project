import React, { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router";
import { readDeck } from "../../utils/api/index";
import Study from "./Study";
import DeckViewer from "./DeckViewer";

//Switchboard for deck routes

function DeckRouter({ currentDeck, setCurrentDeck, abortController }) {
  const { deckId } = useParams();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function deckSelected() {
      const selectedDeck = await readDeck(deckId, abortController.signal);
      setCurrentDeck(selectedDeck);
      setCards(selectedDeck["cards"]); 
    }

    deckSelected();

    return () => abortController.abort();
  }, []);
 
  return (
    <Switch>
      <Route path="/decks/:deckId/study">
        <Study currentDeck={currentDeck} cards={cards} />
      </Route>
      <Route path="/decks/:deckId">
        <DeckViewer
          currentDeck={currentDeck}
          cards={cards}
          abortController={abortController}
        />
      </Route>
    </Switch>
  );
}

export default DeckRouter;
