import { useEffect, useState } from "react";
import React from "react";
import { listDecks } from "./utils/api/index.js";

function Decks() {
  const [decks, setDecks] = useState({});
  const abortController = new AbortController();
  useEffect(() => { 
    async function loadDecks() {
      try {
        const response = await listDecks(abortController.signal); 
        console.log(response);
        setDecks(response);
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
      }
    }

    loadDecks();

    return () => abortController.abort();
  }, []);

  return <h1>Hey this is the  </h1>;
}

export default Decks;
