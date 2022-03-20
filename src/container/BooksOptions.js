import React, {useState} from "react";
import ViewAllBooks from "../components/ViewAllBooks";

const BooksOptions = ({allBooks}) => {

    const [viewAllBooks, setViewAllBooks] = useState(false)
    const [addNewBook, setAddNewBook] = useState(false)
    const [findBookById, setFindBookById] = useState(false)
    const [updateBookById, setUpdateBookById] = useState(false)
    const [deleteBookById, setDeleteBookById] = useState(false)

    const handleViewAllBooks = () => viewAllBooks ? setViewAllBooks(false) : setViewAllBooks(true);

    return (
        <>
        <ul>
            <button onClick={handleViewAllBooks}>View all books</button>
            <button>Add a new book</button>
            <button>Find a book by Id</button>
            <button>Update a book by Id</button>
            <button>Delete a book by Id</button>
        </ul>
        <section>
            {viewAllBooks ? <ViewAllBooks allBooks={allBooks}/> : null}
        </section>
        </>

    )
}

export default BooksOptions;