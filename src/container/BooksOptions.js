import React, {useState} from "react";
import ViewAllBooks from "../components/book-components/ViewAllBooks";
import AddNewBook from "../components/book-components/AddNewBook";

const BooksOptions = ({allBooks, addBookToDatabase}) => {

    const [viewAllBooks, setViewAllBooks] = useState(false)
    const [addNewBook, setAddNewBook] = useState(false)
    const [findBookById, setFindBookById] = useState(false)
    const [updateBookById, setUpdateBookById] = useState(false)
    const [deleteBookById, setDeleteBookById] = useState(false)

    const handleViewAllBooks = () => viewAllBooks ? setViewAllBooks(false) : setViewAllBooks(true);
    const handleAddNewBook = () => addNewBook ? setAddNewBook(false) : setAddNewBook(true);
    const handleFindBookById = () => findBookById ? setFindBookById(false) : setFindBookById(true);
    const handleUpdateBookById = () => updateBookById ? setUpdateBookById(false) : setUpdateBookById(true);
    const handleDeleteBookById = () => deleteBookById ? setDeleteBookById(false) : setDeleteBookById(true);

    return (
        <>
        <ul>
            {/* make these a dropdown menu on hover */}
            <button onClick={handleViewAllBooks}>View all books</button>
            <button onClick={handleAddNewBook}>Add a new book</button>
            <button>Find a book by Id</button>
            <button>Update a book by Id</button>
            <button>Delete a book by Id</button>
        </ul>
        <section>
            {viewAllBooks ? <ViewAllBooks allBooks={allBooks}/> : null}
            {addNewBook ? <AddNewBook allBooks={allBooks} addBookToDatabase={addBookToDatabase}/> : null}
        </section>
        </>

    )
}

export default BooksOptions;