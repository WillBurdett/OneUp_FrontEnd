import React, { useState } from 'react';
import BooksOptions from '../container/BooksOptions';
import AuthorsOptions from '../container/AuthorsOptions';
import CustomerOptions from '../container/CustomersOptions';
import Navbar from '../container/NavBar';
import yangEOTM from '../images/yangEOTM.jpeg';
import './Manager.css';
import BootstrapNavbar from '../components/BootstrapNavbar';


const Manager = ({allBooks , addBookToDatabase, deleteBookById, getBookById, bookById, updateBookById, allAuthors, addAuthorToDatabase, deleteAuthorById, updateAuthorById, allCustomers, addCustomerToDatabase, deleteCustomerById, updateCustomerById}) => {

    
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
            <br/>
            <BootstrapNavbar/>
            <section id="manager-main-container">
                <div id="manager-sidebar">
                    <h3>Employee of the month</h3>
                    <img id="yang" src = {yangEOTM} alt = "Employee of the month image"/>
                    <p>"Hahaha thank you" -Yang</p>
                    <br/>
                    <h2>Please select the directory you would like to access:</h2>
                    <button className="bttn" onClick={handleSetBooksSelected}>Books</button>
                    <button className="bttn" onClick={handleSetAuthorsSelected}>Authors</button>
                    <button className="bttn" onClick={handleSetCustomersSelected}>Customers</button>

                </div>
                <section id="manager-main-section">
                    <div>
                        <h1>Staff Operations</h1>
                    </div>
                    <div>
                        {booksSelected ?
                            <BooksOptions
                                allBooks={allBooks}
                                addBookToDatabase={addBookToDatabase}
                                deleteBookById={deleteBookById}
                                getBookById={getBookById}
                                bookById={bookById}
                                updateBookById={updateBookById}
                            />
                            : <p></p>}
                        {authorsSelected ?
                            <AuthorsOptions
                                allAuthors={allAuthors}
                                addAuthorToDatabase={addAuthorToDatabase}
                                deleteAuthorById={deleteAuthorById}
                                updateAuthorById={updateAuthorById}
                            />
                            : <p></p>}
                        {customersSelected ?
                            <CustomerOptions 
                                allCustomers={allCustomers}
                                addCustomerToDatabase={addCustomerToDatabase}
                                deleteCustomerById={deleteCustomerById}
                                updateCustomerById={updateCustomerById}
                            />
                            : <p></p>}
                    </div>
                </section>
            </section>
        </>
    )
}

export default Manager;