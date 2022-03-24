import React from "react";
import '../../book.css';

const Book = ({book}) => {
    // pass in func to get authors name
    return(
        <div className="individual-book">
            <p>Id: {book.bookId}</p>
            <h2>{book.title}</h2>
            <h3>Genre: {book.genre}</h3>
            <h3>Author Id: {book.authorId}</h3>
            <h3>User Id: {book.userID}</h3>
            <h3>On Loan: {book.loaned.toString()}</h3>
            <h3>ISBN: {book.isbn}</h3>
        </div>
    )
}

export default Book;