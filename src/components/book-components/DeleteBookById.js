import React, {useState} from "react";

const DeleteBookById = ({deleteBookById}) => {

    const [idToDelete, setIdToDelete] = useState(0)

    const handleIdToDeleteChange = event => setIdToDelete(event.target.value)

    const handleDeleteBookById = () => {
        deleteBookById(idToDelete);
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