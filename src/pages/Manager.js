import React, { useState } from 'react';
import BooksOptions from '../container/BooksOptions';
import AuthorsOptions from '../container/AuthorsOptions';
import CustomerOptions from '../container/CustomersOptions';

const Manager = ({allBooks , addBookToDatabase, deleteBookById, getBookById, bookById, updateBookById, allAuthors, addAuthorToDatabase, deleteAuthorById, allCustomers, addCustomerToDatabase, deleteCustomerById, updateCustomerById}) => {

    const  [booksSelected, setBooksSelected] = useState(false);
    const  [authorsSelected, setAuthorsSelected] = useState(false);
    const  [customersSelected, setCustomersSelected] = useState(false);

    const handleSetBooksSelected = () => {
        booksSelected ? setBooksSelected(false) : setBooksSelected(true)
    }
    const handleSetAuthorsSelected = () => {
        authorsSelected ? setAuthorsSelected(false) : setAuthorsSelected(true)
    }
    const handleSetCustomersSelected = () => {
        customersSelected ? setCustomersSelected(false) : setCustomersSelected(true)
    }

    return(
        <>
            <h1>Manager</h1>
            <h2>Please select the directory you would like to access:</h2>
                <nav>
                    <button onClick={handleSetBooksSelected}>Books</button>
                    {/* make these a dropdown menu on hover */}
                    {booksSelected ? 
                    <BooksOptions 
                    allBooks={allBooks} 
                    addBookToDatabase={addBookToDatabase}
                    deleteBookById={deleteBookById}
                    getBookById={getBookById}
                    bookById={bookById}
                    updateBookById={updateBookById}
                    /> 
                    : <p>View, Add, Update and Delete from the Books Directory.</p>}

                    <button onClick={handleSetAuthorsSelected}>Authors</button>
                    {authorsSelected ? 
                    <AuthorsOptions
                    allAuthors={allAuthors}
                    addAuthorToDatabase={addAuthorToDatabase}
                    deleteAuthorById={deleteAuthorById}
                    /> 
                    : <p>View, Add, Update and Delete from the Authors Directory.</p>}
                    
                    <button onClick={handleSetCustomersSelected}>Customers</button>
                    {customersSelected ? 
                    <CustomerOptions
                    allCustomers={allCustomers}
                    addCustomerToDatabase={addCustomerToDatabase}
                    deleteCustomerById={deleteCustomerById}
                    updateCustomerById={updateCustomerById}
                    />
                    : <p>View, Add, Update and Delete from the Customers Directory.</p>}
                </nav>    
        </>
    )
}

export default Manager;