import React, { Component } from "react";
import Book from "./Book";

export default class Shelf extends Component {
  render() {
    let { shelfTitle, bookList } = this.props;
    return (
      <div className="bookshelf" >
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((book) => (
              <li key={book.title}>
                <Book book={book}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
