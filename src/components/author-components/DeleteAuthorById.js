import React, {useState} from "react";
import { Navigate } from "react-router-dom";

const DeleteAuthorById = ({deleteAuthorById}) => {

    const [idToDelete, setIdToDelete] = useState(0)

    const handleIdToDeleteChange = event => setIdToDelete(event.target.value);

    const handleDeleteAuthorById = event => {
        event.preventDefault();

        if(!idToDelete){
            alert("missing information")
            return;
        }

        deleteAuthorById(idToDelete);

        setIdToDelete(0)

        // to fix a redirection issue after delete form is submitted
        return <Navigate to='/manager'/>
    }

    return (
        <form onSubmit={handleDeleteAuthorById}>
            <label htmlFor="deleteId">Id of the Author you would like to delete:</label>
            <input type="text" id="deleteId" value={idToDelete} onChange={handleIdToDeleteChange}/>

            <input type="submit" value="Delete"/>
        </form>
    )
}

export default DeleteAuthorById;