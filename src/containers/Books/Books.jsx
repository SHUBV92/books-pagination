// Packages
import React, {
  useEffect,
  useState,
} from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom";
import queryString from "query-string";
// Components
import Book from "../../components/Book/Book";
// Styling
import { Button, Spinner } from "react-bootstrap";
import {
  Container,
  Header,
  Buttons,
  Cards,
} from "./Books.styles.jsx";

const Books = () => {
  const history = useHistory();
  const location = useLocation();
  const initialQueryString = queryString.parse(
    location.search
  );
  const path = window.location.pathname;
  const initialPageNumber =
    Number(initialQueryString.page) || 1;

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(
    initialPageNumber
  );

  useEffect(() => {
    history.push(`${path}?page=${page}`);
  }, []);

  useEffect(() => {
    fetch(
      "https://nyx.vima.ekt.gr:3000/api/books",
      {
        method: "POST",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const results = res.books;
        return setBooks(results);
      });
  }, [page]);

  useEffect(() => {
    if (page > 0) {
      history.push(`${path}?page=${page}`);
    }
  }, [page, history, path]);

  const startIndex = (page - 1) * 5;
  const selectedBooks = books.slice(
    startIndex,
    startIndex + 5
  );

  return (
    <Container>
      <Header>
        <h1>Paginated Books</h1>
      </Header>
      <Buttons>
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev Page
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={
            books ? books.moreItems : false
          }
        >
          Next Page
        </Button>
      </Buttons>
      <Cards>
        {books ? (
          selectedBooks.map((book) => (
            <Book page {...book} />
          ))
        ) : (
          <Spinner
            animation="border"
            variant="warning"
            style={{ marginLeft: "50vw" }}
          />
        )}
      </Cards>
    </Container>
  );
};

export default Books;
