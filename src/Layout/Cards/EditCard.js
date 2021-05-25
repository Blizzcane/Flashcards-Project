import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readCard, updateCard } from "../../utils/api";

function EditCard({ currentDeck, updateCardCount, abortController }) {
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
    console.log("useEffect EditCard");
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
  }, [cardId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Edited Card:", formData);
    formData.id = cardId;
    formData.deckId = currentDeck.id;
    console.log(formData);
    updateCard(formData, abortController.signal);
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
          <li className="breadcrumb-item active">{`Edit Card ${cardId}`}</li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
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
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary  mb-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditCard;
