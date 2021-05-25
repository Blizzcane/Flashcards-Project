import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { readCard, updateCard } from "../../utils/api";

function AddCard({ currentDeck, addCard, updateCardCount, abortController }) {
  const { cardId } = useParams();
  const initialFormState = { front: "", back: "" };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    console.log("useEffect CardForm");
    async function getCard(id) {
      const cardData = await readCard(id, abortController.signal);
      console.log("cardData:", cardData);
      setFormData({
        front: cardData.front,
        back: cardData.back,
      });
    }
    getCard(cardId);

    return () => abortController.abort();
  }, [currentDeck]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //check which route the user is in.
    console.log("Submitted:", formData);
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
          Done
        </Link>
        <button type="submit" className="btn btn-primary  mb-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddCard;