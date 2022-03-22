import React from "react";
const Customers = ({customer}) => {

    return(
        <>
        <p>Id: {customer.serialID}</p>
        <p>Username: {customer.username}</p>
        <p>Name: {customer.name}</p>
        <p>isManager: {customer.isManager}</p>
        <p>Password: {customer.password}</p>
        
        </>
    )
}
export default Customers;