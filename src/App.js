import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import ListBooks from "./ListBooks";
import { Route } from "react-router-dom";
import Search from "./Search";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks />} />
        <Route path="/search" render={() => <Search />} />
      </div>
    );
  }
}

export default BooksApp;
