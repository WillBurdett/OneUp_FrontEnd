import React from "react";
import customerLogo from '../../images/customerLogo.png'
import '../../customers.css'

const Customers = ({customer}) => {

    return(
        <div className="customer-container">
            <div className="customer-image">
                <img src={customerLogo} alt="Customer logo" />
            </div>
            <div className="customer-description">
                <p>Id: {customer.serialID}</p>
                <h2>Username: {customer.username}</h2>
                <h3>Name: {customer.name}</h3>
                <p>{customer.isManager}</p>
                <p>{customer.password}</p>
            </div>
        </div>
    )
}
export default Customers;