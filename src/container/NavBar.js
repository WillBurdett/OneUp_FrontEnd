import React from 'react'
import bookLogo from '../images/bookLogo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (

    <>
        <ul id="navbar">
            <li className="navitem"><img src = {bookLogo} alt = "Book logo"/></li>
            <li className="navitem"><Link to="/">Home</Link></li>
            {/* Add nav item for About Us (and corresponding page) */}
            <li className="navitem"><Link to="/">About us</Link></li>
            <li className="navitem"><Link to="/">Contact</Link></li>
        </ul>
    </>

    )

}

export default Navbar;