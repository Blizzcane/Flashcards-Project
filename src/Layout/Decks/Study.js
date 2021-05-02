import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api/index";
import { Link, useParams } from "react-router-dom";
import Cards from "../Cards/Cards"

function Study({currentDeck, setCurrentDeck}) {
  const { deckId } = useParams();
  

  useEffect(() => {
    const abortController = new AbortController();
    async function deckSelected() {
      const selectedDeck = await readDeck(deckId, abortController.signal);
      setCurrentDeck(selectedDeck);
    }

    deckSelected();

    return () => abortController.abort();
  }, []);

  const cards = currentDeck["cards"];
  console.log(cards);

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
      <Cards deck={currentDeck}/>
    </div>
  );
}

export default Study;
