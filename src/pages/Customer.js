import React, {useState} from 'react';

const Customer = ({allBooks, availableBooks, unavailableBooks, loanBook, returnBook}) => {

    const [idToReturn, setIdToReturn] = useState(0)
    const [idOfBookToBorrow, setIdOfBookToBorrow] = useState(0)
    const [idOfUserToBorrow, setIdOfUserToBorrow] = useState(0)


    const handleIdToReturn = event => setIdToReturn(event.target.value);
    const handleBookIdToBorrow = event => setIdOfBookToBorrow(event.target.value);
    const handleUserIdToBorrow = event => setIdOfUserToBorrow(event.target.value);

    const handleReturnBookById = event => {
        event.preventDefault()
        returnBook(idToReturn)
        
        setIdToReturn(0)
    }

    const handleBorrowBookById = event => {
        event.preventDefault()

        loanBook(idOfUserToBorrow, idOfBookToBorrow)

        setIdOfBookToBorrow(0);
        setIdOfUserToBorrow(0);
    }

    return (
        <>
        <h1>Welcome to our Library Booking System!</h1>
        <p>Use this page to view our libraries books and fill in one of the forms below to borrow/return a book.</p>
        <p>We hope you enjoy taking a look around!</p>
        <section className='customer-books-container'>
            <div>
                <h3>Available Books</h3>
                {availableBooks}
            </div>
            <div>
                <h3>Books Out-On-Loan</h3>
                {unavailableBooks}
            </div>
        </section>

        <form onSubmit={handleReturnBookById}>
            <label htmlFor="returnId">Id of the Book you would like to return:</label>
            <input type="text" id="returnId" value={idToReturn} onChange={handleIdToReturn}/>

            <input type="submit" value="Return"/>
        </form>
        <form onSubmit={handleBorrowBookById}>
            <label htmlFor="userId">Please enter your User Id:</label>
            <input type="text" id="userId" value={idOfUserToBorrow} onChange={handleUserIdToBorrow}/>

            <label htmlFor="borrowId">Id of the Book you would like to borrow:</label>
            <input type="text" id="borrowId" value={idOfBookToBorrow} onChange={handleBookIdToBorrow}/>

            <input type="submit" value="Borrow"/>
        </form>
        </>
    )
}

export default Customer;