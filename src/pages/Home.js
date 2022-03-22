import React from "react";
import { Link } from "react-router-dom";
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
        <h1>Welcome to our Library!</h1>
        <ul>
            <li>
                <Link to="/manager" onClick={handleIsManager}>To Manager</Link>
            </li>
            <li>
                <Link to="/customer" onClick={handleIsCustomer}>To Customer</Link>
            </li>
        </ul> 
    </>  
    )
}

export default Home;