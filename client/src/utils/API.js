import axios from "axios";

export default {
  // Gets all books
  search: function (searchTerm) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&download=epub&key=AIzaSyCmeoqSUR6Dy_kzcuAzfvoPwIw4ZHzVE9U");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
