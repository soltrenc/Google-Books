import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import { query } from "express";

function Search() {
    // Setting our component's initial state
    const [state, setState] = useState({
        searchTerm: '',
        searchedBooks: []
    })

    //setState({...state, searchTerm: event.target.value})


    // // Load all books and store them with setBooks
    // useEffect(() => {
    //     loadBooks()
    // }, [])

    // // Loads all books and sets them to books
    // function loadBooks() {
    //     API.getBooks()
    //         .then(res =>
    //             setBooks(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };

    // // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    // }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const name = event.target.value;
        const value = event.target.value;
        setState({ name: value })
        //setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        console.log("we got clicked")
        event.preventDefault();
        API.search("Harry Potter").then(function (data) {
            console.log(data)
            var cleanedBooks = []
            // for loop
            //in for loop each time make a new obj with just anme title ect...
            //.push new obj into your empty array above for loop!!
            for (let i = 0; i < data.data.items.length; i++) {
                var cleanBook = {
                    title: data.data.items[i].volumeInfo.title,
                    author: data.data.items[i].volumeInfo.author,
                    description: data.data.items[i].volumeInfo.description,
                    image: data.data.items[i].volumeInfo.imageLinks.thumbnail,
                    link: data.data.items[i].volumeInfo.peviewLink
                }
                cleanedBooks.push(cleanBook)
            }

            //last step update staet with new cleand books array!
            setState({ ...state, searchedBooks: cleanedBooks })


        })
    };

    console.log('this is our state', state)
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1> (React) Google Books Search</h1>
                        <h1> Search for and Save Books of Interest</h1>
                    </Jumbotron>
                    <form>
                        <div style={{ border: "solid 3px red", borderRadius: "5px" }}>
                            <h1> Book Search </h1>
                            <Input
                                onChange={handleInputChange}
                                name="title"
                                placeholder="Search for books"
                            />
                            <FormBtn
                                onClick={handleFormSubmit}
                            >
                                Submit Book Search
              </FormBtn>
                        </div>
                        <Row>
                            <Col size="md-12">
                                <div style={{ border: "solid 3px red", borderRadius: "5px" }}>
                                    <h1> Results </h1>
                                    {state.searchedBooks.map((singleBook) => {
                                        return (
                                            <div>
                                                <h1> {singleBook.title}</h1>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}


export default Search;

