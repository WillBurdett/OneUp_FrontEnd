import React, {useState} from "react";
import ViewAllAuthors from "../components/author-components/ViewAllAuthors";
import AddNewCustomer from "../components/author-components/AddNewAuthor";
import DeleteCustomerById from "../components/author-components/DeleteAuthorById";
import AddNewCustomer from "../components/customer-components/AddNewCustomer";

const CustomerOptions = ({allCustomers, addCustomerToDatabase, deleteCustomerById}) => {

    const [viewAllCustomers , setViewAllCustomers] = useState(false)
    const [addNewCustomer, setAddNewCustomer] = useState(false)
    const [findCustomerById, setFindCustomerById] = useState(false)
    const [updateCustomerById, setUpdateCustomerById] = useState(false)
    const [deleteCustomerByIdState, setDeleteCustomerById] = useState(false)

    const handleViewAllCustomers = () => viewAllCustomers ? setViewAllCustomers(false) : setViewAllCustomers(true);
    const handleAddNewCustomer = () => addNewCustomer ? setAddNewCustomer(false) : setAddNewCustomer(true);
    const handleFindCustomerById = () => findCustomerById ? setFindCustomerById(false) : setFindCustomerById(true);
    const handleUpdateCustomerById = () => updateCustomerById ? setUpdateCustomerById(false) : setUpdateCustomerById(true);
    const handleDeleteCustomerById = () => deleteCustomerByIdState ? setCustomerAuthorById(false) : setCustomerAuthorById(true);

    return (
        <>
        <ul>
            {/* make these a dropdown menu on hover */}
            <button onClick={handleViewAllCustomers}>View all Customer</button>
            <button onClick={handleAddNewCustomer}>Add a new Customer</button>
            <button>Find a Customer by Id</button>
            <button>Update a Customer by Id</button>
            <button onClick={handleDeleteCustomerById}>Delete a Customer by Id</button>
        </ul>
        <section>
            {viewAllCustomers ? <ViewAllCustomers allCustomers={allCustomers}/> : null}
            {addNewCustomer ? <AddNewCustomer allCustomers={allCustomers} addCustomerToDatabase={addCustomerToDatabase}/> : null}
            {deleteCustomerByIdState ? <DeleteCustomerById deleteCustomerById={deleteCustomerById}/> : null}
        </section>
        </>

    )
}

export default CustomerOptions;