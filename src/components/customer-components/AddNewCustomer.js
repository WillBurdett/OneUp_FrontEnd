import React, { useState } from "react";

const AddNewCustomer = ({allCustomers, addCustomerToDatabase}) => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [isManager, setIsManager] = useState(false);
    const [password, setPassword] = useState("");


    const handleUsernameChange = event => setUsername(event.target.value);

    const handleNameChange = event => setName(event.target.value);

    const handleIsManagerChange= event => setIsManager(event.target.value);

    const handlePasswordChange = event => setPassword(event.target.value);

    const handleFormSubmit = event => {
        event.preventDefault();

        if(!username || !name || !isManager || !password){
            alert("missing information")
            return;
        }

        const newCustomer = {
            username: username,
            name: name,
            isManager: false,
            password: password
        }
        addCustomerToDatabase(newCustomer)

        setUsername("");
        setName("");
        setIsManager(false);
        setPassword("");

    }

    return(
        <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange}/>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange}/>

        <label htmlFor="is Manager">Manager:</label>
        <input type="checkbox" id="is Manager" value={isManager} onChange={handleIsManagerChange}/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange}/>

        <input type="submit" value="Submit new customer"/>
    </form> 

    )


}

export default AddNewCustomer;