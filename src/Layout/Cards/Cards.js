import React from "react";

//this will return the current card side.

function Cards({ cards, cardNum, setCardNum, flipped, setFlipped }) {
  const cardJSX = cards.map((card) => {
    return (
      <div className="card mt-2">
        <div className="card-body">
          {card.front} {card.back}
        </div>
      </div>
    );
  });

  console.log(cards[cardNum]);
  return <div>{cardJSX}</div>;
}

export default Cards;
