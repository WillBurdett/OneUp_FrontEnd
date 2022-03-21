import React from "react"

const Author = ({author}) => {
    return(
        <>
        <p>Id: {author.authorId}</p>
        <h2>Name: {author.name}</h2>
        <h3>Nationality: {author.nationality}</h3>
        </>
    )
}

export default Author;