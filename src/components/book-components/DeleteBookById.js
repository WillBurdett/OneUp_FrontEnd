import React, {useState} from "react";
import { Navigate } from "react-router-dom";

const DeleteBookById = ({deleteBookById}) => {

    const [idToDelete, setIdToDelete] = useState(0)

    const handleIdToDeleteChange = event => setIdToDelete(event.target.value);

    const handleDeleteBookById = event => {
        event.preventDefault();

        if(!idToDelete){
            alert("missing information")
            return;
        }

        deleteBookById(idToDelete);

        setIdToDelete(0)

        // to fix a redirection issue after delete form is submitted
        return <Navigate to='/manager'/>
    }

    return (
        <form onSubmit={handleDeleteBookById}>
            <label htmlFor="deleteId">Id of the Book you would like to delete:</label>
            <input type="text" id="deleteId" value={idToDelete} onChange={handleIdToDeleteChange}/>

            <input type="submit" value="Delete"/>
        </form>
    )
}

export default DeleteBookById;