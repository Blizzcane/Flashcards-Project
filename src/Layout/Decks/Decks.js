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
        
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
      }
    }

    loadDecks(); 

    return () => {abortController.abort();}
  }, []); 

  console.log(decks); 

  return (
    <div>
      <h1>Hey this is the Decks</h1> 
      <p></p>
    </div>
  );
}

export default Decks;
