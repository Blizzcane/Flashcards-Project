import React, { useState } from "react";
import {
  Link,
  Route,
  Switch
} from "react-router-dom";
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
  const [cardId, setCardId] = useState();

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${currentDeck.id}`}>{currentDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active">
            {mode === "new" ? "Add Card" : `Edit Card ${cardId}`}
          </li>
        </ol>
      </nav>
      <h2>{(mode === "new" ? `${currentDeck.name}: Add Card` : "Edit Card")}</h2>
      <Switch>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <CardForm 
            setMode={setMode}
            mode={mode}
            setCardId={setCardId}
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
            setCardId={setCardId}
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
