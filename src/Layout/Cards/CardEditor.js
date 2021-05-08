import React from "react";
import { Link } from "react-router-dom";
import CardForm from "./CardForm";

function CardEditor({ currentDeck, cards, abortController }) {
  return (
    <div>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>         
        </ol>
      </nav>
      <CardForm
        cards={cards}
        currentDeck={currentDeck}
        abortController={abortController}
      />
    </div>
  );
}

export default CardEditor;
