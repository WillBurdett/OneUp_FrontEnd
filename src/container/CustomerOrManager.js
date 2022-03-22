import Customer from "../pages/Customer";
import Manager from "../pages/Manager";
import React, { useState, useEffect } from "react";
import Book from "../components/book-components/Books";
import Author from "../components/author-components/Authors";
import Customers from "../components/customer-components/Customers";

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
            .then((result) => {
                if (result.ok) {
                    return result.json();
                }
                throw new Error('Something went wrong');
            })
            .then((resp) => setBookById(JSON.stringify(resp)))
            .catch((error) => alert("Book with id " + id + " not found"));
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

    // UPDATE AUTHOR BY ID
    const updateAuthorInDatabase = (id, updatedAuthor) => {
        fetch("http://localhost:8080/authors/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // this block adds our submitted cake to the database
            },
            body: JSON.stringify(updatedAuthor), // this returns our new book object, so we can .then update the component live
        })
            .then((response) => response.json())
            .then((data) => setAllAuthors(allAuthors))
            .catch((error) => console.log(error));
    };

    // GET AUTHOR BY ID FROM DATABASE
    // const getAuthorById = id => {
    //     fetch("http://localhost:8080/authors/" + id, {
    //         method: "GET",
    //     })
    //         .then((result) => {
    //             if (result.ok) {
    //                 return result.json();
    //               }
    //               throw new Error('Something went wrong');
    //         })
    //         .then((resp) => setBookById(JSON.stringify(resp)))
    //         .catch((error) => alert("Author with id " + id + " not found"));
    // };

    // -------------------------------------------------

    // CUSTOMERS
    const [allCustomers, setAllCustomers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then((response) => response.json())
            .then((data) => setAllCustomers(data))
            .catch((error) => console.log(error));
    }, [allCustomers]);

    const allCustomersFormatted = allCustomers.map((customer) => {
        return <Customers key={customer.serialID} customer={customer} />;
    });

    // ADD NEW CUSTOMER
    const addCustomerToDatabase = (newCustomer) => {
        fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newCustomer), 
        })
            .then((response) => response.json())
            .then((data) => setAllCustomers([...allCustomers, data]))
            .catch((error) => console.log(error));
    };

    // DELETE CUSTOMER BY ID FROM DATABASE
    const deleteCustomerById = (id) => {
        fetch("http://localhost:8080/users/" + id, {
            method: "DELETE",
        })
            .then((result) => result.json())
            .then((resp) => console.warn(resp))
            .catch((error) => console.log(error));
    };

    // UPDATE CUSTOMER BY ID
    const updateCustomerInDatabase = (id, updatedCustomer) => {
        fetch("http://localhost:8080/users/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // this block adds our submitted cake to the database
            },
            body: JSON.stringify(updatedCustomer), // this returns our new book object, so we can .then update the component live
        })
            .then((response) => response.json())
            .then((data) => setAllCustomers(allCustomers))
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
                    updateAuthorById={updateAuthorInDatabase}
                    // getAuthorById={getAuthorById}
                    // authorById={authorById}


                    allCustomers={allCustomersFormatted}
                    addCustomerToDatabase={addCustomerToDatabase}
                    deleteCustomerById={deleteCustomerById}
                    updateCustomerById={updateCustomerInDatabase}
                />
            ) : (
                <Customer />
            )}
        </>
    );
};

export default CustomerOrManager;