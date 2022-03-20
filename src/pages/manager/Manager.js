import React, { useState } from 'react';
import BooksOptions from '../../container/BooksOptions';

const Manager = ({allBooks}) => {

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
                    {booksSelected ? <BooksOptions allBooks={allBooks}/> :  <p>View, Add, Update and Delete from the Books Directory.</p>}
                    <button onClick={handleSetAuthorsSelected}>Authors</button>
                    {authorsSelected ? <p>Authors options showing</p> : <p>View, Add, Update and Delete from the Authors Directory.</p>}
                    <button onClick={handleSetCustomersSelected}>Customers</button>
                    {customersSelected ? <p>Customers options showing</p> : <p>View, Add, Update and Delete from the Customers Directory.</p>}
                </nav>    
        </>
    )
}

export default Manager;