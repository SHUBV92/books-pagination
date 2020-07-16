// Packages
import React from "react";
// Styles
import { Container } from "./Book.styles";

const Book = ({
  book_title,
  book_author,
  book_publication_city,
  book_pages,
  id,
}) => {
  return (
    <Container>
      <div className="card">
        <h1>Book title: {book_title}</h1>
        <hr />
        <p>
          <span>Book author:</span> {book_author}
        </p>
        <p>
      <span>Book pages: {book_pages}</span>
        </p>
        <p>
          <span>Publication City:</span>{" "}
          {book_publication_city}{" "}
        </p>
      </div>
    </Container>
  );
};

export default Book;
