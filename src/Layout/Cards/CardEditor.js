import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { deleteCard } from "../../utils/api";
import CardForm from "./CardForm";

function CardEditor({
  deckId,
  currentDeck,
  getDeck,
  addCard,
  cards,
  abortController,
}) {
  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        </ol>
      </nav>
      <Switch>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <CardForm
            deckId={deckId}
            cards={cards}
            getDeck={getDeck}
            addCard={addCard}
            currentDeck={currentDeck}
            abortController={abortController}
          />
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <CardForm
            addCard={addCard}
            cards={cards}
            currentDeck={currentDeck}
            abortController={abortController}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default CardEditor;
