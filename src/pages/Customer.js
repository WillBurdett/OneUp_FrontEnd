import React, {useState} from 'react'
// import Navbar from "../container/NavBar";
import BootstrapNavbar from "../components/BootstrapNavbar";
import FooterBar from "../container/FooterBar";
import './Customer.css'
import './Home.css'

const Customer = ({allBooks, availableBooks, unavailableBooks, loanBook, returnBook}) => {

    const [idToReturn, setIdToReturn] = useState(0)
    const [idOfBookToBorrow, setIdOfBookToBorrow] = useState(0)
    const [idOfUserToBorrow, setIdOfUserToBorrow] = useState(0)
    const [showAllBooks, setShowAllBooks] = useState(false)
    const [showAvailableBooks, setAvailableAllBooks] = useState(false)


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
        <BootstrapNavbar/>
        <section className="customer-headings_container">
            <h1 className="main-title">Loan and return books!</h1>
            <p>Something about exploring the books at home or on holiday. If you require an account, please ask one of our friendly staff to sign you up!</p>
        </section>
        
        {/* Books display */}
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

        <div className='customer-loan_and_return_containers'>
            {/* Loan Book display */}   
            <section className="customer-borrow_all_container">
                <div className="customer-borrow_img_container">
                    <img className="customer-form-img" id="customer-holiday_img" src="http://fdlbooksalon.com/wp-content/uploads/2017/11/reading-is-boss.png" alt="lady reading a book on the beach while laying in a hammock"/>
                </div>       
                <div className="customer-borrow_form_container">  
                    <h2>Loan a book</h2>
                    <form onSubmit={handleBorrowBookById}>
                        <label htmlFor="userId">Please enter your User Id:</label>
                        <input type="text" id="userId" value={idOfUserToBorrow} onChange={handleUserIdToBorrow}/>

                        <label htmlFor="borrowId">Id of the Book you would like to borrow:</label>
                        <input type="text" id="borrowId" value={idOfBookToBorrow} onChange={handleBookIdToBorrow}/>

                        <input type="submit" value="Borrow"/>
                    </form>
                </div> 
            </section>


            <section className="customer-return_all_container"> 
                <div className ="customer-return_form_container">
                    <form onSubmit={handleReturnBookById}>
                        <label htmlFor="returnId">Id of the Book you would like to return:</label>
                        <input type="text" id="returnId" value={idToReturn} onChange={handleIdToReturn}/>

                        <input type="submit" value="Return"/>
                    </form>
                </div>
                <div className="customer-return_img_container">
                    <img className="customer-form-img" id="customer-return_img" src="https://footwearnews.com/wp-content/uploads/2018/01/return.jpg" alt="package with a big return stamp"/>
                </div> 
            </section>
        </div>
        <section className='customer-FooterBar'>
            <FooterBar/>
        </section>
        
        </>
    )
}

export default Customer;