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
  cards,
  loadDecks,
  history,
  deleteThisCard,
  deleteThisDeck,
  getDeck
}) {
  const { deckId } = useParams();
  useEffect(() => {
    console.log("useEffect");
    getDeck(deckId);

    return () => {
      abortController.abort();
    };
  }, [deckId]);

 

  return (
    <Switch>
      <Route path="/decks/:deckId/study">
        <Study currentDeck={currentDeck} cards={cards} history={history}/>
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
          deleteThisCard={deleteThisCard}
          setCurrentDeck={setCurrentDeck}
          deleteThisDeck={deleteThisDeck}
          cards={cards}
          loadDecks={loadDecks}
          abortController={abortController}
        />
      </Route>
    </Switch>
  );
}

export default DeckRouter;
