import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards"; 

function Study({ currentDeck, cards }) { 
  const [cardNum, setCardNum] = useState(0);
  const [flipped, setFlipped] = useState(false); 

  const deckTracker = () => {
    if (cardNum + 1 === cards.length) {
      cardNum = cards.length;
    } else {
      setCardNum(cardNum + 1);
    }
  };

  return (
    <div>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to="/">Add the Link later to Deck</Link>
          </li>
          <li class="breadcrumb-item active">Study</li>
        </ol>
      </nav>
      <h1>Study: {currentDeck["name"]}</h1>
      <Cards
        cards={cards}
        cardNum={cardNum}
        setCardNum={setCardNum}
        flipped={flipped}
        setFlipped={setFlipped}
      />
    </div>
  );
}

export default Study;
