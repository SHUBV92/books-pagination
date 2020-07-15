import React from "react";
import {
  render,
  cleanup,
} from "@testing-library/react";

import Book from "./Book.jsx";

describe("<Book />", () => {
  afterEach(cleanup);

  it("should display all book data", () => {
    const book_title = "Foo";
    const book_author = "Bar";
    const book_publication_city = "London";
    const id = 1;

    const { getByText } = render(
      <Book
        book_title={book_title}
        book_author={book_author}
        book_publication_city={
          book_publication_city
        }
        id={id}
      />
    );

    expect(getByText("Bar")).toBeTruthy();
    expect(getByText("London")).toBeTruthy();
  });
});
