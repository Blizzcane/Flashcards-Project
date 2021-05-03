import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../Cards/Cards"

function Study({currentDeck}) {
  
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
      <Cards currentDeck={currentDeck} />
    </div>
  );
}

export default Study;
