import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../container/NavBar";
import FooterBar from "../container/FooterBar";
import './Home.css'


const Home = ({isManager}) => {

    const handleIsManager = () => {
        isManager(0)
    }

    const handleIsCustomer = () => {
        isManager(1);
    }

    return (
    <>   
        {/* <section className="home-login_btn">
        <p><Link  id="home-staff_login"to="/manager" onClick={handleIsManager}>Staff Login</Link></p>
        </section>    */}

        <section className="home-staff-login">
            <button className="btn">
                <Link to="/manager" onClick={handleIsManager}>Staff Login</Link>
            </button>
        </section>

        <Navbar/>
        <section className="home-headings_container">
            <h1 className="main-title">Welcome to <span id="home-1up">1-Up</span> library!</h1>
            <h2>'Opening the door to knowledge'</h2>
        </section>
        <>
            <div dangerouslySetInnerHTML={{__html: `
                <div class="book-container">
                    <div class="book">
                        <div id="cover-text" class="cover">Welcome!</div>
                        <div class="page"></div>
                        <div class="page"></div>
                        <div class="page"></div>
                        <div class="page"></div>
                        <div class="page"></div>
                        <div class="last-page">
                            <img src="https://i.guim.co.uk/img/media/56be7b100f9704b507dbac33715297ae2f5bd11e/0_491_4024_2414/master/4024.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67b671ed36500300ac0b275a00007f79"
                            alt="">
                            <h2 id="stephen-king-quote" >"Books are a uniquely portable magic."</h2>
                            <h3>– Stephen King</h3>
                            </div>
                        <div class="back-cover"></div>
                    </div>
                </div>
                `}} />
        </>
        
        

        <section className="loanOrReturn-container">
            <button className="btn">
                <Link to="/customer" onClick={handleIsCustomer}>Loan or Return a Book</Link>
            </button>
        </section>
        <section className="about-us_container">
            <div className="about-us_textbox">
                <h2>About us</h2>
                <p>Something about the company and our beliefs</p>
            </div>
            <div>
                <img id="home-about-us_img" src="https://i.pinimg.com/originals/7a/07/5a/7a075ae77e31249f5585f38cbeb77dd0.jpg" alt="library books"></img>
            </div>
        </section>
        <FooterBar/>
        
    </>
    ) 
}

export default Home;