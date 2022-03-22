import Customer from "../pages/Customer";
import Manager from "../pages/Manager";
import React, { useState, useEffect } from "react";
import Book from "../components/book-components/Book";
import Author from "../components/author-components/Authors";

const CustomerOrManager = ({ isManager }) => {
    // All 'Book' state is loaded here to be parsed as both Manager and Customer
    // need access to books (for viewing, borrowing and returning purposes).

    // However customers do not need access to 'User' state and
    // therefore this will not be parsed to the Customer component.

    // BOOKS

    // SINGLE SOURCE OF BOOKS STATE
    const [allBooks, setAllBooks] = useState([]);
    const [availableBooks, setAvailableBooks] = useState([]);
    const [unavailableBooks, setUnavailableBooks] = useState([]);
    const [bookById, setBookById] = useState([]);

    
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

    // GET AVAILABLE BOOKS
    useEffect(() => {
        fetch("http://localhost:8080/available-books") // returns a promise
            .then((response) => response.json()) // what we want to do with it? create json with body (returns another promise)
            .then((data) => setAvailableBooks(data)) // set our state equal to the data we received
            .catch((error) => console.log(error));
    }, [availableBooks]);

    const availableBooksFormatted = availableBooks.map((book) => {
        return <Book key={book.bookId} book={book} />;
    });

    // GET UNAVAILABLE BOOKS
    useEffect(() => {
        fetch("http://localhost:8080/unavailable-books") // returns a promise
            .then((response) => response.json()) // what we want to do with it? create json with body (returns another promise)
            .then((data) => setUnavailableBooks(data)) // set our state equal to the data we received
            .catch((error) => console.log(error));
    }, [unavailableBooks]);

    const unavailableBooksFormatted = unavailableBooks.map((book) => {
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

    //---------------------------------------------

    // GET BOOK BY ID FROM DATABASE
    const getBookById = id => {
        fetch("http://localhost:8080/books/" + id, {
            method: "GET",
        })
            .then((response) => response.json())
            .then(result => setBookById([result.bookId, result.title, result.genre, result.authorId, result.userID, result.loaned, result.isbn])) 
            .catch((error) => alert("Book with " + id + " not found."));
          
    };

   //---------------------------------------------




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









    // CUSTOMER SIDE

    // RETURN BOOK BY ID

    const returnBook = (bookId) => {
        fetch(`http://localhost:8080/assign/${bookId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // this block adds our submitted cake to the database
            }, // this returns our new book object, so we can .then update the component live
        })
            .then((response) => response.json())
            .then((data) => setAllBooks(allBooks))
            .catch((error) => console.log(error));
    };

  


    // LOAN BOOK BY ID
    const loanBook = (userId, bookId) => {
        fetch(`http://localhost:8080/assign/${bookId}/user/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // this block adds our submitted cake to the database
            }, // this returns our new book object, so we can .then update the component live
        })
            .then((response) => response.json())
            .then((data) => setAllBooks(allBooks))
            .catch((error) => console.log(error));
    };



    return (
        <>
            {/* <Book bookById={bookById}/> */}
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
                <Customer
                allBooks={allBooksFormatted} 
                availableBooks={availableBooksFormatted}
                unavailableBooks={unavailableBooksFormatted}
                loanBook={loanBook}
                returnBook={returnBook}/>
            )}
        </>
    );


};

export default CustomerOrManager;