import React from "react";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function NewDeck() {
  return (
    <div>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
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
        <a href="#" class="btn btn-secondary">
          Cancel
        </a>
        <a href="#" class="btn btn-primary">
          Submit
        </a>
      </form>
    </div>
  );
}

export default NewDeck;
