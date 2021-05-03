import React from "react";
import { Link } from "react-router-dom";

//view individual decks

function DeckViewer({ currentDeck, cards }) {
  const deck = currentDeck;
  const cardsJSX = cards.map((card) => {
    return (
      <div className="card mt-2">
        <div className="card-body container">
          <div className="row">
            <div className="col">{card.front}</div>
            <div className="col">{card.back}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active">{deck.name}</li>
        </ol>
      </nav>
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>

      <h3>Cards</h3>
      {cardsJSX}
    </div>
  );
}

export default DeckViewer;
