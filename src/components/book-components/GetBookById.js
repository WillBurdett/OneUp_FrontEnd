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

        const bookFound = getBookById(idToGet, allBooks);

        console.log(bookFound)

        if (bookFound == null){
            setShowBook(false);
        } else {
            setBookToShow(bookFound)
            setShowBook(true)
        }


        // to fix a redirection issue after delete form is submitted
        return <Navigate to='/manager'/>
    }



    return (
        <>
        <form onSubmit={handleGetBookById}>
            <label htmlFor="idToGet">Id of the Book you would like to find:</label>
            <input type="text" id="idToGet" value={idToGet} onChange={handleIdToGetChange}/>

            <input type="submit" value="Get book"/>
        </form>
        {showBook ? {bookToShow} : null }
        </>
    )
}


export default GetBookById;