import React from "react";
import "./CardContainer.css";

import { useState } from "react";

const CardContainer = () => {
  const [books, setBooks] = useState([]);

  return (
    <div className="card-container">
      <div>
        <button onClick={() => console.log("Hello click!")}>GetAllBooks</button>
      </div>
      <div>
        {books.length >= 1
          ? books.map((book, key) => <p>Title: {book.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default CardContainer;
