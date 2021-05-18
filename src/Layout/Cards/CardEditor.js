import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { readCard } from "../../utils/api";
import CardForm from "./CardForm";

function CardEditor({
  deckId,
  currentDeck,
  getDeck,
  updateCardCount,
  addCard,
  cards,
  loadDecks,
  abortController,
}) {
  const [mode, setMode] = useState("new");

   

  return (
    <div>
      <Switch>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <CardForm
            setMode={setMode}
            mode={mode}
            deckId={deckId}
            cards={cards}
            updateCardCount={updateCardCount}
            getDeck={getDeck}
            loadDecks={loadDecks}
            addCard={addCard}
            currentDeck={currentDeck}
            abortController={abortController}
          />
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <CardForm
            mode={mode}
            setMode={setMode}
            updateCardCount={updateCardCount}
            addCard={addCard}
            cards={cards}
            loadDecks={loadDecks}
            currentDeck={currentDeck}
            abortController={abortController}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default CardEditor;
