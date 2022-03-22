import React, {useState} from "react";
import ViewAllAuthors from "../components/author-components/ViewAllAuthors";
import AddNewAuthor from "../components/author-components/AddNewAuthor";
import DeleteAuthorById from "../components/author-components/DeleteAuthorById";
import UpdateAuthor from "../components/author-components/UpdateAuthor";
import GetAuthorById from "../components/author-components/GetAuthorById";

const AuthorsOptions = ({allAuthors, addAuthorToDatabase, deleteAuthorById, updateAuthorById, getAuthorById, authorById}) => {

    const [viewAllAuthors, setViewAllAuthors] = useState(false)
    const [addNewAuthor, setAddNewAuthor] = useState(false)
    const [getAuthorByIdState, setGetAuthorById] = useState(false)
    const [updateAuthorByIdState, setUpdateAuthorById] = useState(false)
    const [deleteAuthorByIdState, setDeleteAuthorById] = useState(false)

    const handleViewAllAuthors = () => viewAllAuthors ? setViewAllAuthors(false) : setViewAllAuthors(true);
    const handleAddNewAuthor = () => addNewAuthor ? setAddNewAuthor(false) : setAddNewAuthor(true);
    const handleGetAuthorById = () => getAuthorByIdState ? setGetAuthorById(false) : setGetAuthorById(true);
    const handleUpdateAuthorById = () => updateAuthorByIdState ? setUpdateAuthorById(false) : setUpdateAuthorById(true);
    const handleDeleteAuthorById = () => deleteAuthorByIdState ? setDeleteAuthorById(false) : setDeleteAuthorById(true);

    return (
        <>
        <ul>
            {/* make these a dropdown menu on hover */}
            <button onClick={handleViewAllAuthors}>View all authors</button>
            <button onClick={handleAddNewAuthor}>Add a new author</button>
            <button onClick={handleGetAuthorById}>Find an author by Id</button>
            <button onClick={handleUpdateAuthorById}>Update an author by Id</button>
            <button onClick={handleDeleteAuthorById}>Delete an author by Id</button>
        </ul>
        <section>
            {viewAllAuthors ? <ViewAllAuthors allAuthors={allAuthors}/> : null}
            {addNewAuthor ? <AddNewAuthor allAuthors={allAuthors} addAuthorToDatabase={addAuthorToDatabase}/> : null}
            {deleteAuthorByIdState ? <DeleteAuthorById deleteAuthorById={deleteAuthorById}/> : null}
            {updateAuthorByIdState ? <UpdateAuthor updateAuthorById={updateAuthorById}/> : null}
            {getAuthorByIdState ? <GetAuthorById getAuthorById={getAuthorByIdState} authorById={authorById}/> : null}
        </section>
        </>

    )
}

export default AuthorsOptions;