import { useEffect, useState } from "react";
import React from "react";
import { listDecks } from "../../utils/api/index.js";

function Decks() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function loadDecks() {
      try {
        const response = await listDecks(abortController.signal);
        setDecks(response);
        decks.forEach((deck) => console.log(deck));
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
      }
    }

    loadDecks();

    return () => {
      abortController.abort();
    };
  }, []);

  const list = decks.map((deck) => {
    <div>
      <h3>{deck.name}</h3>
      <p>{deck.description}</p>
    </div>;
  });

  return (
    <div>
      <h1>Hey this is the Decks</h1>
      <p>{list}</p>
    </div>
  );
}

export default Decks;
