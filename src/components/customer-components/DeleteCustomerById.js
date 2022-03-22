import React, {useState} from "react";
import { Navigate } from "react-router-dom";

const DeleteCustomerById = ({deleteCustomerById}) => {

    const [idToDelete, setIdToDelete] = useState(0)

    const handleIdToDeleteChange = event => setIdToDelete(event.target.value);

    const handleDeleteCustomerById = event => {
        event.preventDefault();

        if(!idToDelete){
            alert("missing information")
            return;
        }

        deleteCustomerById(idToDelete);

        setIdToDelete(0)

        // to fix a redirection issue after delete form is submitted
        return <Navigate to='/manager'/>
    }

    return (
        <form onSubmit={handleDeleteCustomerById}>
            <label htmlFor="deleteId">Id of the Customer you would like to delete:</label>
            <input type="text" id="deleteId" value={idToDelete} onChange={handleIdToDeleteChange}/>

            <input type="submit" value="Delete"/>
        </form>
    )
}

export default DeleteCustomerById;