import React from "react"

const FooterBar = () => {




    return (

        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>1-Up</h4>
                        <ul>
                            <li><a href=""></a>About us</li>
                            <li><a href=""></a>Our services</li>
                            <li><a href=""></a>Life in the library</li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        <h4>Locations</h4>
                        <ul>
                            <li><a href=""></a>Bright Office</li>
                            <li><a href=""></a>Edinburgh</li>
                            <li><a href=""></a>Henley</li>
                            <li><a href=""></a>Los Santos</li>
                        </ul>

                    </ div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Loan Queries</a></li>
                            <li><a href="">Return Queries</a></li>
                            <li><a href=""></a>Lost book form</li>
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

        </footer>


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