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
      <h2 className="my-2">Create Deck</h2>
      <form>
        <label for="name">Name:</label>
        <input
          id="name"
          placeholder="Deck Name"
          required
          type="text"
          name="name"
          style={{ width: "100%", marginBottom: "15px" }}
        />
        <label for="description">Description:</label>
        <textarea
          id="description"
          placeholder="Brief description of the deck"
          required
          name="description"
          style={{ width: "100%", marginBottom: "15px" }}
        ></textarea>
        <Link to="/" class="btn btn-secondary mr-2 mb-4">
          Cancel
        </Link>
        <a href="#" class="btn btn-primary  mb-4">
          Submit
        </a>
      </form>
    </div>
  );
}

export default NewDeck;
