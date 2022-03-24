import React from "react"
import "../../authors.css"
import authorLogo from '../../images/authorLogo.png'

const Author = ({author}) => {
    return(
        <div className="author-container">
            <div className="author-image">
                <img src = {authorLogo} alt = "Author logo"/>
            </div>
            <div className="author-description">
                <p>Id: {author.authorId}</p>
                <h2>Name: {author.name}</h2>
                <h3>Nationality: {author.nationality}</h3>
            </div>
        </div>
    )
}

export default Author;