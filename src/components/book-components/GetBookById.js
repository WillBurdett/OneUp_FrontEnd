import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import Book from "./Book";

const GetBookById = ({getBookById, bookById, allBooks}) => {
    const [idToGet, setIdToGet] = useState(0)
    const [bookToShow, setBookToShow] = useState()
    const [showBook, setShowBook] = useState(false)
  
    const handleIdToGetChange = (event) => {
        setIdToGet(event.target.value);
    };


    const handleGetBookById  = async (event) => {
        event.preventDefault();

        console.log(idToGet)

        if(!idToGet){
            alert("missing information")
            return;
        }

        getBookById(idToGet);

        setTimeout(() =>{
        if (bookById === null || bookById === undefined){
            setShowBook(false);
        } else if ( bookById !== undefined || bookById !== []){
            setShowBook(true)
        }
        console.log("loading...")
        } , 1000);
        // to fix a redirection issue after delete form is submitted
        // return <Navigate to='/manager'/>
    }

    const foundBook = {
        bookId: bookById[0],
        title: bookById[1],
        genre: bookById[2],
        authorId: bookById[3],
        userID: bookById[4],
        loaned: bookById[5],
        isbn: bookById[6]
    } 



    return (
        <>
        <form onSubmit={handleGetBookById}>
            <label htmlFor="idToGet">Id of the Book you would like to find:</label>
            <input type="text" id="idToGet" value={idToGet} onChange={handleIdToGetChange}/>

            <input type="submit" value="Get book"/>
        </form>
        {showBook && bookById != undefined ? <Book key={foundBook.bookId} book={foundBook}/> : null }
        {/* {bookById[0]} */}
        {/* <Book key={foundBook.bookId} book={foundBook}/> */}
        </>
    )
}


export default GetBookById;