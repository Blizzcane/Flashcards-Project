import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api/index";
import { Link, useParams } from "react-router-dom";

function Study() {
  const { deckId } = useParams();
  
  const [currentDeck, setCurrentDeck] = useState([]);

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
      <p></p>
    </div>
  );
}

export default Study;
