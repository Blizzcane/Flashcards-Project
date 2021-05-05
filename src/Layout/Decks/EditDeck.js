import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Form from "./Form";

function EditDeck({currentDeck, abortController}) {
    const history = useHistory();
  return (
    <div>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item"><Link onClick={() => history.goBack()}>
          {currentDeck.name}
          </Link></li>
          <li className="breadcrumb-item active">Edit Deck</li>
        </ol>
      </nav>
      <Form abortController={abortController} currentDeck={currentDeck}/>
    </div>
  );
}

export default EditDeck;
