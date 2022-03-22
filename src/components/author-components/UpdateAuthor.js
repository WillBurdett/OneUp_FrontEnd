import React, {useState} from "react";

const UpdateAuthor = ({updateAuthorById}) => {


    // Test the format of form submission in postman first!!!!!!!!

    const [authorId, setAuthorId] = useState(0);
    const [name, setName] = useState("");
    const [nationality, setNationality] = useState("");

    // test to see if this is working well via 'Highlight updates when components render' in 'Component' in Dev tools

    const handleAuthorIdChange = event => setAuthorId(event.target.value);

    const handleNameChange = event => setName(event.target.value);

    const handleNationalityChange = event => setNationality(event.target.value);

    const handleFormSubmit = event => {
        event.preventDefault();

        if(!authorId || !name || !nationality) {
            alert("missing information")
            return;
        }

        const updatedAuthor = {
            name: name,
            nationality: nationality
        }
        updateAuthorById(authorId, updatedAuthor)

        setAuthorId(0);
        setName("");
        setNationality("");
    }


    return (
        <form onSubmit={handleFormSubmit}>

            <label htmlFor="authorId">Author Id:</label>
            <input type="text" id="authorId" value={authorId} onChange={handleAuthorIdChange}/>


            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange}/>

            <label htmlFor="nationality">Nationality:</label>
            <input type="text" id="nationality" value={nationality} onChange={handleNationalityChange}/>

            <input type="submit" value="Update Author"/>
        </form> 
    )
}

export default UpdateAuthor;