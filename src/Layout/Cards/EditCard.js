import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readCard, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

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
      <CardForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        currentDeck={currentDeck}
        formData={formData}
      />
    </div>
  );
}

export default EditCard;
