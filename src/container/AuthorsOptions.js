import React, {useState} from "react";
import ViewAllAuthors from "../components/author-components/ViewAllAuthors";
import AddNewAuthor from "../components/author-components/AddNewAuthor";
import DeleteAuthorById from "../components/author-components/DeleteAuthorById";

const AuthorsOptions = ({allAuthors, addAuthorToDatabase, deleteAuthorById}) => {

    const [viewAllAuthors, setViewAllAuthors] = useState(false)
    const [addNewAuthor, setAddNewAuthor] = useState(false)
    const [findAuthorById, setFindAuthorById] = useState(false)
    const [updateAuthorById, setUpdateAuthorById] = useState(false)
    const [deleteAuthorByIdState, setDeleteAuthorById] = useState(false)

    const handleViewAllAuthors = () => viewAllAuthors ? setViewAllAuthors(false) : setViewAllAuthors(true);
    const handleAddNewAuthor = () => addNewAuthor ? setAddNewAuthor(false) : setAddNewAuthor(true);
    const handleFindAuthorById = () => findAuthorById ? setFindAuthorById(false) : setFindAuthorById(true);
    const handleUpdateAuthorById = () => updateAuthorById ? setUpdateAuthorById(false) : setUpdateAuthorById(true);
    const handleDeleteAuthorById = () => deleteAuthorByIdState ? setDeleteAuthorById(false) : setDeleteAuthorById(true);

    return (
        <>
        <ul>
            {/* make these a dropdown menu on hover */}
            <button onClick={handleViewAllAuthors}>View all authors</button>
            <button onClick={handleAddNewAuthor}>Add a new author</button>
            <button>Find an author by Id</button>
            <button>Update an author by Id</button>
            <button onClick={handleDeleteAuthorById}>Delete an author by Id</button>
        </ul>
        <section>
            {viewAllAuthors ? <ViewAllAuthors allAuthors={allAuthors}/> : null}
            {addNewAuthor ? <AddNewAuthor allAuthors={allAuthors} addAuthorToDatabase={addAuthorToDatabase}/> : null}
            {deleteAuthorByIdState ? <DeleteAuthorById deleteAuthorById={deleteAuthorById}/> : null}
        </section>
        </>

    )
}

export default AuthorsOptions;