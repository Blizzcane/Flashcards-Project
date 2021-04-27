import { useEffect, useState } from "react";
import React from "react";

function Decks() {

    const {decks, setDecks} = useState([]);
  useEffect(() => {
    async function loadDecks() {
      const response = await fetch(API_BASE_URL);
      const deck = await response.json();
      console.log(deck);
      setDecks(decks);
    }

    loadDecks();
  }, []);


  return <h1>Hey this is the {decks}</h1>;
}

export default Decks;
