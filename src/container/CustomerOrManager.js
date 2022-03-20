import Customer from "../pages/Customer";
import Manager from "../pages/manager/Manager";
import React, {useState, useEffect} from 'react';
import Book from "../components/book-components/Books";




const CustomerOrManager = ({isManager}) => { 

    // BOOKS

    // SINGLE SOURCE OF BOOKS STATE
    const [allBooks, setAllBooks] = useState([]);

    // GET ALL BOOKS
    useEffect(() => {
        fetch("http://localhost:8080/books") // returns a promise
        .then(response => response.json()) // what we want to do with it? create json with body (returns another promise)
        .then(data => setAllBooks(data)) // set our state equal to the data we received
        .catch(error => console.log(error)) 
        }, [allBooks]);    

        const allBooksFormatted = allBooks.map( book  => {
                return <Book key={book.bookId} book ={book}/>
            }   
        )

    // ADD NEW BOOK
    const addBookToDatabase = newBook => {
        fetch("http://localhost:8080/books/?isManager=true", {
            method: "POST",
            headers: {
              'Content-Type' : "application/json" // this block adds our submitted cake to the database
            },
            body: JSON.stringify(newBook) // this returns our new pet object, so we can .then update the component live
          })
          .then(response => response.json)
          .then(data => setAllBooks([...allBooks, data]))
          .catch(error => console.log(error))
          };
        


        

    

    // load all data here to pass to manager or customer

return (
        <>
            {isManager && {allBooks} !== []? <Manager 
            allBooks={allBooksFormatted} 
            addBookToDatabase={addBookToDatabase}/>
            :  <Customer/>} 
        </>
    )
}

export default CustomerOrManager;