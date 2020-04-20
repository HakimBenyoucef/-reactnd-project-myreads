import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import ListBooks from "./ListBooks";
import { Route } from "react-router-dom";
import Search from "./Search";
import { getAll, update } from "./BooksAPI";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    getAll()
      .then((data) => {
        this.setState({ books: data });
      })
      .catch();
  }

  updateBooks(book) {
    update(book, book.shelf);

    this.setState(prevState => ({
      books: prevState.books.filter(b => b.id !== book.id).concat(book)
    }));
  }
  
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              updateBooks={this.updateBooks.bind(this)}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              books={this.state.books}
              updateBooks={this.updateBooks.bind(this)}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
