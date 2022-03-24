import React, {useState} from 'react'
import Navbar from "../container/NavBar";
import FooterBar from "../container/FooterBar";
import './Customer.css'
import './Home.css'
import '../App.css'
import ViewAllBooks from '../components/book-components/ViewAllBooks';
import Book from '../components/book-components/Book';

const Customer = ({allBooks, availableBooks, unavailableBooks, loanBook, returnBook}) => {


    const booksOnShelf = document.querySelectorAll(".book2"); 

    const shelfArray = ["x", "x", "x", "x"]


    const [bookShelfState, setBookShelfState] = useState(shelfArray)
    const [idToReturn, setIdToReturn] = useState(0)
    const [idOfBookToBorrow, setIdOfBookToBorrow] = useState(0)
    const [idOfUserToBorrow, setIdOfUserToBorrow] = useState(0)
    const [showAllBooks, setShowAllBooks] = useState(false)
    const [showAvailableBooks, setAvailableBooks] = useState(false)

    const availableFilter = document.querySelector(".available-filter")

    const handleIdToReturn = event => setIdToReturn(event.target.value);
    const handleBookIdToBorrow = event => setIdOfBookToBorrow(event.target.value);
    const handleUserIdToBorrow = event => setIdOfUserToBorrow(event.target.value);

    const handleViewAllBooks = () => {
        showAllBooks ? setShowAllBooks(false) : setShowAllBooks(true);
    }
    
    const handleViewAvailableBooks = () => {
        if (showAvailableBooks){
            availableFilter.classList.remove("available-filter-on")
            setAvailableBooks(false) 
        } else {
            availableFilter.classList.add("available-filter-on")
            setAvailableBooks(true);
        }
    }
    
    const handleReturnBookById = event => {
        event.preventDefault()

        checkToReturnBook()
        
        returnBook(idToReturn)
        
        setIdToReturn(0)
    }

    const handleBorrowBookById = event => {
        event.preventDefault()

        checkToRemoveBook();

        loanBook(idOfUserToBorrow, idOfBookToBorrow)

        setIdOfBookToBorrow(0);
        setIdOfUserToBorrow(0);
    }

    const checkToRemoveBook = () => {
        for (let i=bookShelfState.length-1; i>=0; i--){
            if (bookShelfState[i] === "x"){
                shelfArray[i] = ""
                setBookShelfState(shelfArray)
                booksOnShelf[i].classList.add("hide")
                return i;
            }
        }
        return null;
    }

    const checkToReturnBook = () => {
        for (let i=bookShelfState.length-1; i>=0; i--){
            if (bookShelfState[i] === ""){
                shelfArray[i] = "x"
                setBookShelfState(shelfArray)
                booksOnShelf[i].classList.remove("hide")
                return i;
            }
        }
        return null;
    }

    return (
        <>  
        <Navbar/>
        <section className="customer-headings_container">
            <h1 className="main-title">Loan and return books!</h1>
            <p>Explore our delightful selection of books and hopefully you'll find just what you're looking for. Whether you read for leisure, education purposes or entertainment - we hope to have you covered.</p>
            <p>If you require an library membership, please contact one of our friendly staff to sign you up!</p>
        </section>

       <div className="book2-animation_container" dangerouslySetInnerHTML={{__html: `
        <div class="bookshelf2">
            <div class="books2"> 
                <div class="book2" style="--bg-image: url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581128232l/50214741.jpg);"></div>
                <div class="book2" style="--bg-image: url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544204706l/42505366.jpg);"></div>
                <div class="book2" style="--bg-image: url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541621322l/42201395.jpg);"></div>
                <div class="book2" style="--bg-image: url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548518877l/43263520._SY475_.jpg);"></div>
            </div>
        </div>
        `}} />

        
        {/* Books display */}
        <section className='customer-books-container'>
            <div>
                <button className="customer-return_btn" onClick={handleViewAllBooks}>View All Books</button>
                {showAllBooks ?  <> <button className="available-filter customer-return_btn" onClick={handleViewAvailableBooks}>Filter By Available Books</button> </>: null}
                {showAllBooks && !showAvailableBooks ? <> {availableBooks} {unavailableBooks} </> : null}
                {showAllBooks && showAvailableBooks ? <> {availableBooks} </> : null}
            </div>
        </section>

        <div className='customer-loan_and_return_containers'>
            {/* Loan Book display */}   
            <section className="customer-borrow_all_container">
                <div className="customer-borrow_img_container">
                    <img className="customer-form-img" id="customer-holiday_img" src="http://fdlbooksalon.com/wp-content/uploads/2017/11/reading-is-boss.png" alt="lady reading a book on the beach while laying in a hammock"/>
                </div>       
                <div className="customer-borrow_form_container">  
                    
                    <form className="customer-borrow_return_form"onSubmit={handleBorrowBookById}>
                        <h2>Loan a book</h2>
                        <div className='customer-bookid_warning'><em>*Forgot your Id? No problem. Our staff will gladly help</em></div>
                        <label htmlFor="userId">Please enter your User Id:</label>
                        <input type="text" id="userId" value={idOfUserToBorrow} onChange={handleUserIdToBorrow}/>

                        <label htmlFor="borrowId">Id of the Book you would like to borrow:</label>
                        <input type="text" id="borrowId" value={idOfBookToBorrow} onChange={handleBookIdToBorrow}/>

                        <input id="customer-loan_button" className='customer-borrow_btn' type="submit" value="Borrow"/>
                    </form>
                </div> 
            </section>


            <section className="customer-return_all_container"> 
                <div className ="customer-return_form_container">
                    <form id="customer_return_form"className="customer-borrow_return_form" onSubmit={handleReturnBookById}>
                    <h2>Return a book</h2> 
                    <div className='customer-bookid_warning'><em>*Book Id found in the inside of the front cover</em></div>
                    
                        <label htmlFor="returnId">Id of the Book you would like to return:</label>
                        <input type="text" id="returnId" value={idToReturn} onChange={handleIdToReturn}/>

                        <input className="customer-return_btn" type="submit" value="Return"/>
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