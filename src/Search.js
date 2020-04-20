import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleChange(text) {
    search(text.trim())
      .then((data) => {
        this.setState(
          { results: data.error ? [] : data },
          this.updateResults(data)
        );
      })
      .catch((e) => {
        this.setState({ results: [] });
      });
  }

  updateResults(data) {
    if (!data.error) {
      data.map((book) => {
        this.props.books.map((b) => {
          if (b.id === book.id) {
            book.shelf = b.shelf;
          }
          return b;
        });
        return book;
      });
      this.setState({
        results: data,
      });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.handleChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results &&
              this.state.results.map((book) => (
                <li key={book.id}>
                  <Book book={book} updateBooks={this.props.updateBooks} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
