import React from "react";

//this will return the current card side.

function Cards({cards, cardNum, setCardNum, flipped, setFlipped}) {
   
  console.log(cards[cardNum]);
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h4 className="card-title">
          Card idk
        </h4>
        <p className="card-text">  not working
        </p> 
      </div>
    </div>
  );
}

export default Cards;
