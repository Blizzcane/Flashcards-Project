import React, { useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";

function Form({ currentDeck, addNewDeck, history, cards }) {
  const { url } = useRouteMatch();
  const initialFormState = {
    name: currentDeck ? currentDeck.name : "",
    description: currentDeck ? currentDeck.description : "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    //check which route the user is in.
    if (url === "/decks/new") {
      const newDeckId = await addNewDeck(formData);
      history.push(`/decks/${newDeckId}`);
    } else {
      
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input
        id="name"
        placeholder="Deck Name"
        value={formData.name}
        required
        type="text"
        onChange={handleChange}
        name="name"
        style={{ width: "100%", marginBottom: "15px" }}
      />
      <label for="description">Description:</label>
      <textarea
        id="description"
        placeholder="Brief description of the deck"
        value={formData.description}
        required
        onChange={handleChange}
        name="description"
        style={{ width: "100%", marginBottom: "15px" }}
      ></textarea>
      <Link
        to="#"
        onClick={() => history.goBack()}
        class="btn btn-secondary mr-2 mb-4"
      >
        Cancel
      </Link>
      <button type="submit" class="btn btn-primary  mb-4">
        Submit
      </button>
    </form>
  );
}

export default Form;
