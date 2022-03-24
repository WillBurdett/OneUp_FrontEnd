import React from "react"
import "./FooterBar.css";

const FooterBar = () => {
    return (

        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>1-Up</h4>
                        <ul>
                            <li><a href="">About us</a></li>
                            <li><a href="">Our services</a></li>
                            <li><a href="">Life in the library</a></li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        <h4>Locations</h4>
                        <ul>
                            <li><a href="">Bright Office</a></li>
                            <li><a href="">Edinburgh</a></li>
                            <li><a href="">Henley</a></li>
                            <li><a href="">Los Santos</a></li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Loan Queries</a></li>
                            <li><a href="">Return Queries</a></li>
                            <li><a href="">Lost book form</a></li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="social-links">
                            <a href=""></a>
                        </div>

                    </ div>

                    </div>


            </div>

        </div>


    // NAV BAR EXAMPLE    
    //     <>
    //     <ul id="navbar">
    //         <li className="navitem"><img src = {bookLogo} alt = "Book logo"/></li>
    //         <li className="navitem"><Link to="/">Home</Link></li>
    //         {/* Add nav item for About Us (and corresponding page) */}
    //         <li className="navitem"><Link to="/customer" target="_blank" rel="noopener noreferrer">Customer</Link></li>
    //         <li className="navitem"><Link to="/manager" target="_blank" rel="noopener noreferrer">Manager</Link></li>
    //     </ul>
    // </>

    )
}

export default FooterBar;