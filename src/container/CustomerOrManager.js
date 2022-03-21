import Customer from "../pages/Customer";
import Manager from "../pages/Manager";
import React, { useState, useEffect } from "react";
import Book from "../components/book-components/Books";
import Author from "../components/author-components/Authors";

const CustomerOrManager = ({ isManager }) => {
    // All 'Book' state is loaded here to be parsed as both Manager and Customer
    // need access to books (for viewing, borrowing and returning purposes).

    // However customers do not need access to 'User' state and
    // therefore this will not be parsed to the Customer component.

    // BOOKS

    // SINGLE SOURCE OF BOOKS STATE
    const [allBooks, setAllBooks] = useState([]);
    const [bookById, setBookById] = useState("");

    
    // GET ALL BOOKS
    useEffect(() => {
        fetch("http://localhost:8080/books") // returns a promise
            .then((response) => response.json()) // what we want to do with it? create json with body (returns another promise)
            .then((data) => setAllBooks(data)) // set our state equal to the data we received
            .catch((error) => console.log(error));
    }, [allBooks]);

    const allBooksFormatted = allBooks.map((book) => {
        return <Book key={book.bookId} book={book} />;
    });

    // ADD NEW BOOK
    const addBookToDatabase = (newBook) => {
        fetch("http://localhost:8080/books/?isManager=true", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // this block adds our submitted cake to the database
            },
            body: JSON.stringify(newBook), // this returns our new book object, so we can .then update the component live
        })
            .then((response) => response.json)
            .then((data) => setAllBooks([...allBooks, data]))
            .catch((error) => console.log(error));
    };

    // DELETE BOOK BY ID FROM DATABASE
    const deleteBookById = (id) => {
        fetch("http://localhost:8080/books/" + id, {
            method: "DELETE",
        })
            .then((result) => result.json())
            .then((resp) => console.warn(resp))
            .catch((error) => console.log(error));
    };

    // GET BOOK BY ID FROM DATABASE
    const getBookById = id => {
        fetch("http://localhost:8080/books/" + id, {
            method: "GET",
        })
            .then((result) => result.json())
            .then((resp) => setBookById(JSON.stringify(resp)))
            .catch((error) => console.log(error));
    };


    // UPDATE BOOK BY ID
    const updateBookInDatabase = (id, updatedBook) => {
      fetch("http://localhost:8080/books/" + id, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json", // this block adds our submitted cake to the database
          },
          body: JSON.stringify(updatedBook), // this returns our new book object, so we can .then update the component live
      })
          .then((response) => response.json())
          .then((data) => setAllBooks(allBooks))
          .catch((error) => console.log(error));
  };

    // load all data here to pass to manager or customer

    // -------------------------------------------------

    // AUTHORS
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/authors")
            .then((response) => response.json())
            .then((data) => setAllAuthors(data))
            .catch((error) => console.log(error));
    }, [allAuthors]);

    const allAuthorsFormatted = allAuthors.map((author) => {
        return <Author key={author.authorId} author={author} />;
    });


    // ADD NEW AUTHOR
    const addAuthorToDatabase = (newAuthor) => {
        fetch("http://localhost:8080/authors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // this block adds our submitted cake to the database
            },
            body: JSON.stringify(newAuthor), // this returns our new book object, so we can .then update the component live
        })
            .then((response) => response.json)
            .then((data) => setAllAuthors([...allAuthors, data]))
            .catch((error) => console.log(error));
    };

    // DELETE AUTHOR BY ID FROM DATABASE
    const deleteAuthorById = (id) => {
        fetch("http://localhost:8080/authors/" + id, {
            method: "DELETE",
        })
            .then((result) => result.json())
            .then((resp) => console.warn(resp))
            .catch((error) => console.log(error));
    };



    return (
        <>
            {isManager && { allBooks } !== [] ? (
                <Manager
                    allBooks={allBooksFormatted}
                    addBookToDatabase={addBookToDatabase}
                    deleteBookById={deleteBookById}
                    getBookById={getBookById}
                    bookById={bookById}
                    updateBookById={updateBookInDatabase}

                    allAuthors={allAuthorsFormatted}
                    addAuthorToDatabase={addAuthorToDatabase}
                    deleteAuthorById={deleteAuthorById}
                    

                />
            ) : (
                <Customer />
            )}
        </>
    );


};

export default CustomerOrManager;