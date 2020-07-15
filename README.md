
# Books Pagination

This project is a web app created using  ``` react boilerplate, react-router and styled-components```, that pulls in a range of data for Greek Books. It shows the book title, book publication city, author. You can use the previous or next page buttons to cycle through the list of books shown on every page.  

## Getting Started

To start working with this web app follow the steps below:

-   Clone from the Repo [Books Pagination](https://github.com/SHUBV92/paginated-book) 

-   cd into the books-pagination folder 

-   Run: npm install

-   To start the web app run: npm start

or 

You can find the website deployed on heroku:[on-track-retail](https://on-track-retail.herokuapp.com/?page=1)

### Web App Example

![Web App Example](https://github.com/SHUBV92/paginated-book/blob/books/src/assets/Screenshot.png)

[Web App Example](https://github.com/SHUBV92/paginated-book/blob/master/src/assets/Screenshot.png)

## Running the tests

Run: npm test --coverage 

## Improvements
-   Making the api call a reusable function
-   Add a search bar feature to search specific data points

## Issues encountered during development
-   The API provided returns 20 objects, so the app only shows the first 5 pages, therefore showing no data on the subsequent pages. 
As an improvement I would get more familiar with the API and its endpoints using official API documentation.
Tools used to debug: Chrome Web Developer Tools(Inspect) and Postman.

-   The web app shows no book information after deploying to Heroku, assuming the API url is not accessible and not being called on.
As an improvement I would debug the deployed web app using Heroku's in-built console and get more familiar with the API using official documentation.

-   Initially commits were made directly to the master branch, that were then extracted out into a Books branch. As an improvement, I would create a new branch to implement a feature and then merge this feature branch into the master branch after a pull request and review.  




