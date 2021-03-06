# MyReads Project

This is the first project of the Udacity React Nanodegree.
It's a front end app which handles shelfs of a books library.
Users can change shelfs (categories) of their books (Currently Reading, Want Read and Read) and can search and add books and navigate between the app components. 

![app](docs/screenshots/capture1.png)
![app](docs/screenshots/capture2.png)

- **Live Demo:** [https://hakim-myreads-project.netlify.app/](https://hakim-myreads-project.netlify.app/)

## TL;DR

To start the app:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* enjoy


## Backend Server

A backend server is provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
