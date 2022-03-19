import Customer from "../pages/Customer";
import Manager from "../pages/manager/Manager";
import React, { useState } from 'react';


const CustomerOrManager = ({isManager}) => { 

    const [allBooks, setAllBooks] = useState(["Harry Potter"]);

return (
    <>
   {isManager ? <Manager allBooks={allBooks} />:  <Customer/>} 
    </>
)
}

export default CustomerOrManager;