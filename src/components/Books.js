import React from "react";
const Book = ({book}) => {
    // pass in func to get authors name
    return(
        <>
        <p>Id: {book.bookId}</p>
        <h2>Title: {book.title}</h2>
        <h3>Genre: {book.genre}</h3>
        <h3>Author Id: {book.authorId}</h3>
        <h3>User Id: {book.userID}</h3>
        <h3>On Loan: {book.loaned}</h3>
        <p>ISBN: {book.isbn}</p>
        </>
    )
}

export default Book;