import React, { useState } from "react";

const AddNewCustomer = ({}) => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [isManger, setIsManager] = useState(false);
    const [password, setPassword] = useState("");


    const handleUsernameChange = event => setUsername(event.target.value);

    const handleNameChange = event => setName(event.target.value);

    const handleIsManagerChange= event => setIsManager(event.target.value);

    const handlePasswordChange = event => setPassword(event.target.value);

    const handleFormSubmit = event => {
        event.preventDefault();

        if(!username || !name || !isManger || !password){
            alert("missing information")
            return;
        }

        const newCustomer = {
            username: username,
            name: namne,
            isManger: false,
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
        <input type="checkbox" id="is Manager" value={isManger} onChange={handleIsManagerChange}/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange}/>

        <input type="submit" value="Submit New Book"/>
    </form> 

    )


}

export default AddNewCustomer;