import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function CardForm({ currentDeck, handleChange, handleSubmit, formData }) {
  const { url } = useRouteMatch();
  const buttonTxt =
    url === `/decks/${currentDeck.id}/cards/new` ? "Done" : "Cancel";

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="front">Front</label>
      <textarea
        id="front"
        placeholder="Front side of card"
        value={formData.front}
        required
        onChange={handleChange}
        name="front"
        style={{ width: "100%", marginBottom: "15px" }}
      ></textarea>
      <label htmlFor="back">Back:</label>
      <textarea
        id="back"
        placeholder="Back side of card"
        value={formData.back}
        required
        onChange={handleChange}
        name="back"
        style={{ width: "100%", marginBottom: "15px" }}
      ></textarea>
      <Link
        to={`/decks/${currentDeck.id}`}
        className="btn btn-secondary mr-2 mb-4"
      >
        {buttonTxt}
      </Link>
      <button type="submit" className="btn btn-primary  mb-4">
        Save
      </button>
    </form>
  );
}

export default CardForm;
