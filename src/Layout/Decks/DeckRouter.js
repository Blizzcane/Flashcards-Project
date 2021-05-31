import React, { useEffect } from "react";
import { Route, Switch, useParams } from "react-router";
import Study from "./Study";
import DeckViewer from "./DeckViewer";
import EditDeck from "./EditDeck";
import AddCard from "../Cards/AddCard";
import EditCard from "../Cards/EditCard";

//Switchboard for deck routes

function DeckRouter({
  currentDeck,
  setCurrentDeck,
  abortController,
  addNewDeck,
  cards,
  loadDecks,
  updateThisDeck,
  history,
  addCard,
  updateCardCount,
  numOfCards,
  deleteThisCard,
  deleteThisDeck,
  getDeck,
}) {
  const { deckId } = useParams();
  console.log("deckRouter, deckId", deckId);
  useEffect(() => {
    getDeck(deckId);
    loadDecks();
    

    return () => {
      abortController.abort();
    };
  }, [deckId, numOfCards]);

  return (
    <Switch>
      <Route path="/decks/:deckId/cards/:cardId/edit">
        <EditCard
          deckId={deckId}
          cards={cards}
          updateCardCount={updateCardCount}
          getDeck={getDeck}
          loadDecks={loadDecks}
          currentDeck={currentDeck}
          abortController={abortController}
        />
      </Route>
      <Route path="/decks/:deckId/cards/new">
        <AddCard
          updateCardCount={updateCardCount}
          cards={cards}
          addCard={addCard}
          loadDecks={loadDecks}
          currentDeck={currentDeck}
          abortController={abortController}
        />
      </Route>
      <Route path="/decks/:deckId/study">
        <Study
          currentDeck={currentDeck}
          addCard={addCard}
          cards={cards}
          history={history}
        />
      </Route>
      <Route path="/decks/:deckId/edit">
        <EditDeck
          abortController={abortController}
          currentDeck={currentDeck}
          addCard={addCard}
          loadDecks={loadDecks}
          updateCardCount={updateCardCount}
          cards={cards}
          history={history}
          updateThisDeck={updateThisDeck}
          addNewDeck={addNewDeck}
        />
      </Route>
      <Route path="/decks/:deckId">
        <DeckViewer
          currentDeck={currentDeck}
          addCard={addCard}
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
