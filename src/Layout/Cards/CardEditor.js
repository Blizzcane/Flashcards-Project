import React, { useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import CardForm from "./CardForm";

function CardEditor({ currentDeck, addCard, cards, abortController }) {
  return (
    <div>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        </ol>
      </nav>
      <Switch>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <CardForm
            cards={cards}
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
