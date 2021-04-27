import { useEffect, useState } from "react";
import React from "react";

function Decks() {

    const {decks, setDecks} = useState([]);
  useEffect(() => {
      
  }, []);


  return <h1>Hey this is the {decks}</h1>;
}

export default Decks;
