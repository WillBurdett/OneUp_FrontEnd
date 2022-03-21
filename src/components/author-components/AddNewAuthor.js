import React, { useState } from "react";

const AddNewAuthor = ({ allAuthors, addAuthorToDatabase }) => {

    const [name, setName] = useState("");
    const [nationality, setNationality] = useState("");


    const handleNameChange = event => setName(event.target.value);
    const handleNationalityChange = event => setNationality(event.target.value);


    const handleFormSubmit = event => {
        event.preventdefault();

        if (!name || !nationality) {
            alert("missing information")
            return;
        }

        const newAuthor = {
            name: name,
            nationality: nationality
        }

        addAuthorToDatabase(newAuthor)
        setName("");
        setNationality("");

    }

    return (
        <form onSubmit={handleFormSubmit}>
            
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />

            <label htmlFor="nationality">Nationality:</label>
            <input type="text" id="nationality" value={nationality} onChange={handleNationalityChange} />
            <input type="submit" value="Submit New Author"/>
        </form>
    )
}

export default AddNewAuthor;





















