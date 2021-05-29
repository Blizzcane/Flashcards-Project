import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

function NewDeck({
  abortController,
  loadDecks,
  addNewDeck,
  history
}) {
  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Create Deck</li>
        </ol>
      </nav>
      <h2 className="my-2">Create Deck</h2>
      <Form
        abortController={abortController}
        addNewDeck={addNewDeck}
        loadDecks={loadDecks}
        history={history}
      />
    </div>
  );
}

export default NewDeck;
