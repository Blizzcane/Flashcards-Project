import React from "react";
import { Link } from "react-router-dom";

function NewDeck() {
  return (
    <div>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active">Create Deck</li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <form>
        <label for="name">Name:</label>
        <input
          id="name"
          placeholder="Deck Name"
          required
          type="text"
          name="name"
        />
        <label for="description">Description:</label>
        <textarea
          id="description"
          placeholder="Brief description of the deck"
          required
          name="description"
        ></textarea>
        <Link to="/" class="btn btn-secondary">
          Cancel
        </Link>
        <a href="#" class="btn btn-primary">
          Submit
        </a>
      </form>
    </div>
  );
}

export default NewDeck;
