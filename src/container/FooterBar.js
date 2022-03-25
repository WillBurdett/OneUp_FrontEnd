import React from "react"
import "../pages/FooterBar.css";
import TwitterLogo from '../images/TwitterLogo.png';
import FacebookLogo from '../images/FacebookLogo.png';
import InstagramLogo from '../images/InstagramLogo.png';



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
                            <a className="social-media-icons" href=""><img className="Twitter" src={TwitterLogo} alt="Twitter logo"/></a>
                            <a className="social-media-icons" href=""><img className="Instagram" src={InstagramLogo} alt="Instagram logo"/></a>
                            <a className="social-media-icons"  href=""><img className="Facebook" src={FacebookLogo} alt="Facebook logo"/></a>

                        </div>
                        <p className="footer-description"> © 2022 The London Library. All rights reserved. Charity No. 312175</p>

                    </ div>

                    </div>


            </div>

        </div>




    )
}

export default FooterBar;