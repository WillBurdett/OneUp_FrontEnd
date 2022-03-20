import Customer from "../pages/Customer";
import Manager from "../pages/manager/Manager";
import React, {useState, useEffect} from 'react';
import Book from "../components/Books";




const CustomerOrManager = ({isManager}) => { 

    const [allBooks, setAllBooks] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/books") // returns a promise
        .then(response => response.json()) // what we want to do with it? create json with body (returns another promise)
        .then(data => setAllBooks(data)) // set our state equal to the data we received
        .catch(console.log("could not fetch")) 
        }, [allBooks]);    

        // use book component to map all books here
        const allBooksFormatted = allBooks.map( book  => {
                return <Book key={book.bookId} book ={book}/>
            }   
        )
    

    // load all data here to pass to manager or customer

return (
        <>
            {isManager && {allBooks} !== []? <Manager allBooks={allBooksFormatted}/>:  <Customer/>} 
        </>
    )
}

export default CustomerOrManager;