import React, {useState} from "react";
import { Navigate } from "react-router-dom";

const GetBookById = ({getBookById}) => {
    const [idToGet, setIdToGet] = useState(0)
    const handleIdToGetChange = event => setIdToGet(event.target.value);

    const [bookFound, setBookFound] = useState("")


    const handleGetBookById = event => {
        event.preventDefault();

        if(!idToGet){
            alert("missing information")
            return;
        }

        // const book = allBooks.filter(book => book.bookId === idToGet)

        // const book = allBooks.map((book, index) => {
        //     if (book.bookId === idToGet){
        //         return book;
        //     }
        // })

        const book = getBookById(idToGet);
        setBookFound(book.title)
        console.log(book)

        // to fix a redirection issue after delete form is submitted
        // return <Navigate to='/manager'/>
    }


    return (
        <>
        <form onSubmit={handleGetBookById}>
            <label htmlFor="idToGet">Id of the Book you would like to find:</label>
            <input type="text" id="idToGet" value={idToGet} onChange={handleIdToGetChange}/>
            <input type="submit" value="Get book"/>
        </form>
        {/* <>{bookFound!=[] ? {bookFound} : null}</> */}
        {/* <>{bookFound==0 ? null : {bookFound}}</> */}
        </>
    )
}


export default GetBookById;