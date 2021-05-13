import React, { useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";

function CardForm({ currentDeck, cards }) {
  const { url } = useRouteMatch();
  const { cardId } = useParams();
  console.log(cardId, url);
  console.log(cards.cardId);

  const initialFormState = {
    front: cardId ? cards[cardId].front : "",
    back: cardId ? cards[cardId].back : "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //check which route the user is in.
    console.log("Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="front">Front</label>
      <textarea
        id="front"
        placeholder="Front side of card"
        value={formData.front}
        required
        onChange={handleChange}
        name="front"
        style={{ width: "100%", marginBottom: "15px" }}
      ></textarea>
      <label for="back">Back:</label>
      <textarea
        id="back"
        placeholder="Back side of card"
        value={formData.back}
        required
        onChange={handleChange}
        name="back"
        style={{ width: "100%", marginBottom: "15px" }}
      ></textarea>
      <Link to="#" class="btn btn-secondary mr-2 mb-4">
        Done
      </Link>
      <button type="submit" class="btn btn-primary  mb-4">
        Save
      </button>
    </form>
  );
}

export default CardForm;
