import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardForm from "./CardForm";

function AddCard({ currentDeck, addCard, updateCardCount }) {
  const initialFormState = { front: "", back: "" };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Added Card:", formData);
    addCard(currentDeck.id, formData);
    setFormData({ ...initialFormState });
    updateCardCount(1);
  };

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${currentDeck.id}`}>{currentDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active">Add Card</li>
        </ol>
      </nav>
      <h2> Add Card </h2>
      <CardForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        currentDeck={currentDeck}
        formData={formData}
      />
    </div>
  );
}

export default AddCard;
