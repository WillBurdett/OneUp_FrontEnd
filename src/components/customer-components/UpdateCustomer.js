import React, {useState} from "react";

const UpdateCustomer = ({updateCustomerById}) => {

    const [customerId, setCustomerId] = useState(0);
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [isManger, setIsManager] = useState(false);
    const [password, setPassword] = useState("");

    const handleCustomerIdChange = event => setCustomerId(event.target.value);

    const handleUsernameChange = event => setUsername(event.target.value);

    const handleNameChange = event => setName(event.target.value);

    const handleIsManagerChange= event => setIsManager(event.target.value);

    const handlePasswordChange = event => setPassword(event.target.value);

    const handleFormSubmit = event => {
        event.preventDefault();

        if(!customerId || !username || !name || !isManger || !password){
            alert("missing information")
            return;
        }

        const updatedCustomer = {
            customerId: customerId,
            username: username,
            name: name,
            isManger: false,
            password: password
        }
        updateCustomerById(customerId, updatedCustomer)

        setCustomerId(0);
        setUsername("");
        setName("");
        setIsManager(false);
        setPassword("");

    }

    return(
        <form onSubmit={handleFormSubmit}>

        <label htmlFor="customerId">Customer Id:</label>
        <input type="number" id="customerId" value={customerId} onChange={handleCustomerIdChange}/>

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange}/>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange}/>

        <label htmlFor="is Manager">Manager:</label>
        <input type="checkbox" id="is Manager" value={isManger} onChange={handleIsManagerChange}/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange}/>

        <input type="submit" value="Submit New Customer"/>
    </form> 

    )


}


export default UpdateCustomer;