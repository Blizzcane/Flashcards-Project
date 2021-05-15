import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { readCard, updateCard } from "../../utils/api";

function CardForm({ currentDeck, deckId, getDeck, addCard, abortController }) {
  const initialFormState = { front: "", back: "" };
  const [formData, setFormData] = useState({ ...initialFormState });
  const { url } = useRouteMatch();
  const mode = url === `/decks/${currentDeck.id}/cards/new` ? "new" : "edit";
  const { cardId } = useParams();

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    console.log("useEffect CardForm");
    async function getCard(id) {
      if (mode === "edit") {
        const cardData = await readCard(id, abortController.signal);
        setFormData({
          front: cardData.front,
          back: cardData.back,
        });
      }
    }
    getCard(cardId);

    return () => abortController.abort();
  }, [cardId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //check which route the user is in.
    console.log("Submitted:", formData);
    if (mode === "new") {
      addCard(currentDeck.id, formData); 
      setFormData({ ...initialFormState });
    } else {
      formData.id = cardId;
      formData.deckId = currentDeck.id;
      console.log(formData);
      updateCard(formData, abortController.signal);
      getDeck();
    }
  };

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
        {(mode === "edit" ? "Cancel" : "Done")}
      </Link>
      <button type="submit" className="btn btn-primary  mb-4">
        Save
      </button>
    </form>
  );
}

export default CardForm;
