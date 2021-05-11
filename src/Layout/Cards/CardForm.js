import React, { useState } from "react"; 
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function CardForm({ currentDeck, abortController }) {
  // const { url } = useRouteMatch();
  // const { deckId } = useParams();
  const history = useHistory();

  const initialFormState = {
    front: currentDeck ? currentDeck.front : "",
    back: currentDeck ? currentDeck.back : "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //check which route the user is in.
  //   if (url === "/decks/new") {
  //     console.log("created deck");
  //     createDeck(formData, abortController.signal);
  //   } else {
  //     console.log("edited deck");
  //     formData.id = deckId;
  //     updateDeck(formData, abortController.signal);
  //   }
  //   loadDecks();
  //   console.log("Submitted:", formData);
  // };

  return (
    <form >
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
      <Link
        to="#"
        onClick={() => history.goBack()}
        class="btn btn-secondary mr-2 mb-4"
      >
        Done
      </Link>
      <button type="submit" class="btn btn-primary  mb-4">
        Save
      </button>
    </form>
  );
}

export default CardForm;
