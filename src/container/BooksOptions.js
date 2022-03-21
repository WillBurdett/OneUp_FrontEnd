import React, {useState} from "react";
import ViewAllBooks from "../components/book-components/ViewAllBooks";
import AddNewBook from "../components/book-components/AddNewBook";
import DeleteBookById from "../components/book-components/DeleteBookById";
import GetBookById from "../components/book-components/GetBookById";
import UpdateBook from "../components/book-components/UpdateBook";

const BooksOptions = ({allBooks, addBookToDatabase, deleteBookById, getBookById, bookById, updateBookById}) => {

    const [viewAllBooks, setViewAllBooks] = useState(false)
    const [addNewBook, setAddNewBook] = useState(false)
    const [getBookByIdState, setGetBookById] = useState(false)
    const [updateBookByIdState, setUpdateBookById] = useState(false)
    const [deleteBookByIdState, setDeleteBookById] = useState(false)

    const handleViewAllBooks = () => viewAllBooks ? setViewAllBooks(false) : setViewAllBooks(true);
    const handleAddNewBook = () => addNewBook ? setAddNewBook(false) : setAddNewBook(true);
    const handleGetBookById = () => getBookByIdState ? setGetBookById(false) : setGetBookById(true);
    const handleUpdateBookById = () => updateBookByIdState ? setUpdateBookById(false) : setUpdateBookById(true);
    const handleDeleteBookById = () => deleteBookByIdState ? setDeleteBookById(false) : setDeleteBookById(true);

    return (
        <>
        <ul>
            {/* make these a dropdown menu on hover */}
            <button onClick={handleViewAllBooks}>View all books</button>
            <button onClick={handleAddNewBook}>Add a new book</button>
            <button onClick={handleGetBookById}>Find a book by Id</button>
            <button onClick= {handleUpdateBookById}>Update a book by Id</button>
            <button onClick={handleDeleteBookById}>Delete a book by Id</button>
        </ul>
        <section>
            {viewAllBooks ? <ViewAllBooks allBooks={allBooks}/> : null}
            {addNewBook ? <AddNewBook allBooks={allBooks} addBookToDatabase={addBookToDatabase}/> : null}
            {deleteBookByIdState ? <DeleteBookById deleteBookById={deleteBookById}/> : null}
            {getBookByIdState ? <GetBookById getBookById={getBookById} bookById={bookById}/> : null}
            {updateBookByIdState ? <UpdateBook updateBookById={updateBookById}/> : null}
        </section>
        </>
    )
}

export default BooksOptions;