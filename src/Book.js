import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.book = this.props.book;
  }

  handleSelect(shelf) {
    this.book.shelf = shelf;
    this.props.updateBooks(this.book);
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                this.book.imageLinks
                  ? this.book.imageLinks.thumbnail
                  : "./icons/no-image.svg"
              }")`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(event) => this.handleSelect(event.target.value)}
              defaultValue={this.book.shelf ? this.book.shelf : "none"}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.book.title}</div>
        <div className="book-authors">
          {this.book.authors ? this.book.authors.join(", ") : "Unknown"}
        </div>
      </div>
    );
  }
}
