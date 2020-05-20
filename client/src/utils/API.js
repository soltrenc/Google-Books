import axios from "axios";

export default {
  // calls googlbooks api and retrieve books based on user input
  searchBooks: (query) => axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query),
  // get all books saved in db
  getBooks: () => axios.get("/api/books"),
  // saves a book to the db
  saveBook: (bookData) => axios.post("/api/books", bookData),
  // deletes a book with the given id
  deleteBook: (id) => axios.delete("api/books/" + id)
};