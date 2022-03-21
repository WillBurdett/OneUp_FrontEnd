import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import Book from "./Books";

const GetBookById = ({getBookById, bookById}) => {
    let [idToGet, setIdToGet] = useState(0)
  
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

        getBookById(idToGet)


        // console.log(book)

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
        {bookById}
        {/* {bookFound} */}
        </>
    )
}


export default GetBookById;