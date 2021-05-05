import React from "react";

//this will return the current card side.

function Cards({ cards, cardNum, setCardNum, next, flipped, flipper }) {
  const cardFront = cards.map((card) => {
    return card.front;
  });
  const cardBack = cards.map((card) => {
    return card.back;
  });

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          Card {cardNum + 1} of {cards.length}
        </h4>
        <p className="card-text">
          {flipped ? cardBack[cardNum] : cardFront[cardNum]}
        </p>
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={flipper}
        >
          Flip
        </button>
        {flipped && (
          <button type="button" className="btn btn-primary mr-2" onClick={next}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Cards;
