import React, {useState} from "react";

const UpdateBook = ({updateBookById}) => {


    // Test the format of form submission in postman first!!!!!!!!

    const [bookId, setBookId] = useState(0);
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState(0);
    const [isbn, setIsbn] = useState(0);

    // test to see if this is working well via 'Highlight updates when components render' in 'Component' in Dev tools

    const handleBookIdChange = event => setBookId(event.target.value);

    const handleTitleChange = event => setTitle(event.target.value);

    const handleGenreChange = event => setGenre(event.target.value);

    const handleAuthorIdChange = event => setAuthorId(event.target.value);

    const handleIsbnChange = event => setIsbn(event.target.value);

    const handleFormSubmit = event => {
        event.preventDefault();

        if(!bookId || !title || !genre || !authorId || !isbn){
            alert("missing information")
            return;
        }

        const updatedBook = {
            title: title,
            genre: genre,
            authorId: authorId,
            userID: 0,
            loaned: false,
            isbn: isbn
        }
        updateBookById(bookId, updatedBook)

        setBookId(0);
        setTitle("");
        setGenre("");
        setAuthorId(0);
        setIsbn(0);
    }


    return (
        <form onSubmit={handleFormSubmit}>

            <label htmlFor="bookId">Book Id:</label>
            <input type="text" id="bookId" value={bookId} onChange={handleBookIdChange}/>


            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={handleTitleChange}/>

            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" value={genre} onChange={handleGenreChange}/>

            <label htmlFor="authorId">AuthorId:</label>
            <input type="number" id="authorId" value={authorId} onChange={handleAuthorIdChange}/>

            <label htmlFor="isbn">Isbn:</label>
            <input type="number" id="isbn" value={isbn} onChange={handleIsbnChange}/>

            <input type="submit" value="Update Book"/>
        </form> 
    )
}

export default UpdateBook;