import React, { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router";
import { readDeck } from "../../utils/api/index";
import Study from "./Study";
import DeckViewer from "./DeckViewer";
import EditDeck from "./EditDeck";
import CardEditor from "../Cards/CardEditor";
import DeckList from "./DeckList";

//Switchboard for deck routes

function DeckRouter({
  currentDeck,
  setCurrentDeck,
  abortController,
  addNewDeck,
  decks,
  deleteThisDeck
}) {
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
  }, [deckId]);

  return (
    <Switch>
      <Route> 
      </Route>
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
          cards={cards}
          abortController={abortController}
        />
      </Route>
    </Switch>
  );
}

export default DeckRouter;
