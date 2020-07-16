import React from "react";
import {
  render,
  cleanup,
} from "@testing-library/react";
import Books from "./Books.jsx";
// import fetchMock from "fetch-mock";

describe("<Books />", () => {
  it("should render all books", () => {
    const books = [
      {
        id: 2086,
        book_author: "foo",
        book_title: "bar",
      },
      {
        id: 2090,
        book_author: "Adam",
        book_title: "Elequoent JS",
      },
    ];

    const page = 1;

    const { queryAllByText } = render(
      <Books books={books} page={page} />
    );

    expect(
      queryAllByText("Book_Title:")
    ).toHaveLength(books.length);
  });
});
