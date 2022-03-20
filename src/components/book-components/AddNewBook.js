import React, {useState} from "react";

const AddNewBook = ({allBooks, addBookToDatabase}) => {


    // Test the format of form submission in postman first!!!!!!!!

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState(0);
    const [isbn, setIsbn] = useState(0);

    // test to see if this is working well via 'Highlight updates when components render' in 'Component' in Dev tools
    const handleTitleChange = event => setTitle(event.target.value);

    const handleGenreChange = event => setGenre(event.target.value);

    const handleAuthorIdChange = event => setAuthorId(event.target.value);

    const handleIsbnChange = event => setIsbn(event.target.value);

    const handleFormSubmit = event => {
        event.preventDefault();

        if(!title || !genre || !authorId || !isbn){
            alert("missing information")
            return;
        }

        const newBook = {
            title: title,
            genre: genre,
            authorId: authorId,
            userID: 0,
            loaned: false,
            isbn: isbn
        }
        addBookToDatabase(newBook)

        setTitle("");
        setGenre("");
        setAuthorId(0);
        setIsbn(0);
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={handleTitleChange}/>

            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" value={genre} onChange={handleGenreChange}/>

            <label htmlFor="authorId">AuthorId:</label>
            <input type="number" id="authorId" value={authorId} onChange={handleAuthorIdChange}/>

            <label htmlFor="isbn">Isbn:</label>
            <input type="number" id="isbn" value={isbn} onChange={handleIsbnChange}/>

            <input type="submit" value="Submit New Book"/>
        </form> 
    )
}

export default AddNewBook;