import React from "react";

//this will return the current card side.

function Cards({deck}) {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h4 className="card-title">
          Title
        </h4>
        <p className="card-text"> {deck.cards.length}
        </p> 
      </div>
    </div>
  );
}

export default Cards;
