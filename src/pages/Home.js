import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../container/NavBar";
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
        <section className="home-login_btn">
        <p><Link to="/manager" onClick={handleIsManager}>Staff Login</Link></p>
        </section>   
        <Navbar/>
        <section className="home-headings_container">
            <h1 className="main-title">Welcome to <span id="home-1up">1-Up</span> library!</h1>
            <p>Opening the door to knowledge</p>
        </section>
        <>
            <div dangerouslySetInnerHTML={{__html: `<div class ='svg'>
                <?xml version="1.0" standalone="no"?>
                <svg width="800px" height="800px" viewBox="-200 -100 400 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <defs>
                        <rect id="animatedRect" x="-400" y="-100" width="400" height="400">
                            <animateTransform attributeName="transform" type="rotate"
                                from="45,0,-150" to="0,0,-150"
                                begin="0s" dur="5s"
                                
                                calcMode="spline" keyTimes="0;1" keySplines="0.42 0.0 0.58 1.0"
                            />
                        </rect>
                        <clipPath id="clip">
                            <use xlink:href="#animatedRect"/>
                        </clipPath>
                        <mask id="mask" maskUnits="userSpaceOnUse" x="-200" y="-100" width="400" height="400">
                            <rect x="-150" y="0" width="150" height="200" fill="hsla(255,255%,255%,1)" clip-path="url(#clip)"/>
                        </mask>
                        <g id="page">
                            <rect x="-150" y="0" width="150" height="200" fill="hsla(52, 95%, 95%, 1)"/>
                            <image xlink:href="https://i.guim.co.uk/img/media/56be7b100f9704b507dbac33715297ae2f5bd11e/0_491_4024_2414/master/4024.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67b671ed36500300ac0b275a00007f79" 
                            x="-150" y="25" width="150" height="150"/>
                        </g>
                        <linearGradient id="centerGrad" x1="1" x2="0">
                            <stop offset="0" stop-color="hsla(0,0%,0%,1)" stop-opacity="0.3"/>
                            <stop offset="0.02" stop-color="hsla(0,0%,0%,1)" stop-opacity="0"/>
                        </linearGradient>
                        <filter id="shadow">
                            <feOffset in="SourceAlpha">
                                <animate attributeName="dx"
                                    begin="0s" dur="5s"
                                    
                                    calcMode="linear" keyTimes="0;0.5;1" values="0;-1;0"
                                />
                                <animate attributeName="dy"
                                    begin="0s" dur="5s"
                                    
                                    calcMode="linear" keyTimes="0;0.5;1" values="0;1;0"
                                />
                            </feOffset>
                            <feGaussianBlur>
                                <animate attributeName="stdDeviation"
                                    begin="0s" dur="5s"
                                
                                    calcMode="linear" keyTimes="0;0.5;1" values="0;3;0"
                                />
                            </feGaussianBlur>
                            <feMerge>
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/>
                             </feMerge>
                        </filter>
                    </defs>

                    <rect x="-161" y="2" width="322" height="208" fill="hsla(52, 5%, 55%, 1)" rx="2" ry="2"/>
                    <rect x="-160" y="1" width="320" height="208" fill="hsla(1, 95%, 15%, 1)" rx="2" ry="2"/>
                    <path d="M-150,0 L-155,5 V205 L-5,205 L0,200" fill="hsla(52, 5%, 85%, 1)"/>
                    <path d="M150,0 L155,5 V205 L5,205 L0,200" fill="hsla(52, 5%, 85%, 1)"/>
                    
                    <rect x="0" width="150" height="200" fill="hsla(52, 95%, 95%, 1)"/>
                    <g font-family="ubuntu" font-size="12">
                        <text x="20" y="85">"Books are a uniquely</text>
                        <text x="30" y="115">portable magic."</text>
                        <text x="40" y="145">– Stephen King</text>
                    </g>
                    <use xlink:href="#page"/>
                    <rect  x="-400" y="0" width="400" height="200" fill="url(#centerGrad)"/>
                    <g filter="url(#shadow)">
                        <g>
                            <g mask="url(#mask)">
                                <use xlink:href="#page"/>
                                <use xlink:href="#animatedRect" fill="url(#centerGrad)"/>
                            </g>
                            <animateTransform attributeName="transform" type="rotate"
                                from="-90,0,-150" to="0,0,-150"
                                begin="0s" dur="5s"
                                
                                calcMode="spline" keyTimes="0;1" keySplines="0.42 0.0 0.58 1.0"/>
                        </g>
                    </g>
                </svg>
                </div>`}} />
        </>
        
        <section className="loanOrReturn-container">
            <button id="loanOrReturn-btn">
                <Link to="/customer" onClick={handleIsCustomer}>Loan or Return a Book</Link>
            </button>
        </section>
        <section className="about-us_container">
            <div className="about-us_textbox">
                <h3>About us</h3>
                <p>Something about the company and our beliefs</p>
            </div>
            <div>
                <img id="home-about-us_img" src="https://i.pinimg.com/originals/7a/07/5a/7a075ae77e31249f5585f38cbeb77dd0.jpg" alt="library books"></img>
            </div>
        </section>
    </>
    ) 
}

export default Home;