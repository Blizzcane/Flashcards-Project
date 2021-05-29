import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";

function Study({ currentDeck, cards, history }) {
  const [cardNum, setCardNum] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const flipper = () => {
    setFlipped(!flipped);
  };
  const next = () => {
    if (cardNum + 1 >= cards.length) {
      setCardNum(cards.length - 1);

      if (
        window.confirm(
          "Restart cards? \n \n Click 'cancel' to return to the home page"
        )
      ) {
        setCardNum(0);
      } else {
        history.push("/");
      }
    } else {
      setCardNum(cardNum + 1);
    }
    setFlipped(!flipped);
  };

  const studyJSX = (
    <Cards
      flipper={flipper}
      cards={cards}
      cardNum={cardNum}
      next={next}
      setCardNum={setCardNum}
      flipped={flipped}
    />
  );

  const notEnoughCards = (
    <div>
      <h4>Not enough cards.</h4>
      <p>
        You need at least 3 cards to study. There are {cards.length} cards in
        this deck.
      </p>
      <Link
        to={`/decks/${currentDeck.id}/cards/new`}
        className="btn btn-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 20 20"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>{" "}
        Add Cards
      </Link>
    </div>
  );

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
          <li className="breadcrumb-item active">Study</li>
        </ol>
      </nav>
      <h1>Study: {currentDeck["name"]}</h1>
      {cards.length <= 2 ? notEnoughCards : studyJSX}
    </div>
  );
}

export default Study;
