import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class ListBooks extends React.Component {
  sortBooks(a, b) {
    let titleA = a.title.toLowerCase(),
      titleB = b.title.toLowerCase();
    if (titleA < titleB)
      //sort string ascending
      return -1;
    if (titleA > titleB) return 1;
    return 0;
  }

  render() {
    let bookList = this.props.books;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf
                shelfTitle={"Currently Reading"}
                bookList={bookList
                  .filter((book) => book.shelf === "currentlyReading")
                  .sort((a, b) => this.sortBooks(a, b))}
                updateBooks={this.props.updateBooks}
              />
              <Shelf
                shelfTitle={"Want Read"}
                bookList={bookList
                  .filter((book) => book.shelf === "wantToRead")
                  .sort((a, b) => this.sortBooks(a, b))}
                updateBooks={this.props.updateBooks}
              />
              <Shelf
                shelfTitle={"Read"}
                bookList={bookList
                  .filter((book) => book.shelf === "read")
                  .sort((a, b) => this.sortBooks(a, b))}
                updateBooks={this.props.updateBooks}
              />
            </div>
          </div>
          <Link to="/search" className="open-search" />
        </div>
      </div>
    );
  }
}

export default ListBooks;
