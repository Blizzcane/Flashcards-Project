import React from "react";

//this will return the current card side.

function Cards({cards, cardNum, setCardNum, flipped, setFlipped}) {
   
  console.log(cards[cardNum]);
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h4 className="card-title">
          Card {cardNum + 1} of {cards.length}
        </h4>
        <p className="card-text">  {flipped ? cards[cardNum].back : cards[cardNum].front}
        </p> 
      </div>
    </div>
  );
}

export default Cards;
