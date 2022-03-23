import React, {useState} from "react";
import ViewAllCustomers from "../components/customer-components/ViewAllCustomers";
import AddNewCustomer from "../components/customer-components/AddNewCustomer";
import DeleteCustomerById from "../components/customer-components/DeleteCustomerById";
import UpdateCustomerById from "../components/customer-components/UpdateCustomer";

const CustomerOptions = ({allCustomers, addCustomerToDatabase, deleteCustomerById, updateCustomerById}) => {

    const [viewAllCustomers , setViewAllCustomers] = useState(false)
    const [addNewCustomerState, setAddNewCustomer] = useState(false)
    const [findCustomerById, setFindCustomerById] = useState(false)
    const [updateCustomerByIdState, setUpdateCustomerById] = useState(false)
    const [deleteCustomerByIdState, setDeleteCustomerById] = useState(false)

    const handleViewAllCustomers = () => {
        setAllCustomerOptionsToHidden();
        viewAllCustomers ? setViewAllCustomers(false) : setViewAllCustomers(true);
    }
    const handleAddNewCustomer = () => {
        setAllCustomerOptionsToHidden();
        addNewCustomerState ? setAddNewCustomer(false) : setAddNewCustomer(true);
    }
    const handleFindCustomerById = () => {
        setAllCustomerOptionsToHidden();
        findCustomerById ? setFindCustomerById(false) : setFindCustomerById(true);
    }
    const handleUpdateCustomerById = () => {
        setAllCustomerOptionsToHidden();
        updateCustomerByIdState ? setUpdateCustomerById(false) : setUpdateCustomerById(true);
    }
    const handleDeleteCustomerById = () => {
        setAllCustomerOptionsToHidden();
        deleteCustomerByIdState ? setDeleteCustomerById(false) : setDeleteCustomerById(true);
    }

    const setAllCustomerOptionsToHidden = () => {
        setViewAllCustomers(false)
        setAddNewCustomer(false)
        setFindCustomerById(false)
        setUpdateCustomerById(false)
        setDeleteCustomerById(false)
    }

    return (
        <>
        <ul>
            {/* make these a dropdown menu on hover */}
            <button onClick={handleViewAllCustomers}>View all customers</button>
            <button onClick={handleAddNewCustomer}>Add a new customer</button>
            <button onClick={handleFindCustomerById}>Find a Customer by Id</button>
            <button onClick={handleUpdateCustomerById}>Update a customer by Id</button>
            <button onClick={handleDeleteCustomerById}>Delete a customer by Id</button>
        </ul>
        <section>
            {viewAllCustomers ? <ViewAllCustomers allCustomers={allCustomers}/> : null}
            {addNewCustomerState ? <AddNewCustomer allCustomers={allCustomers} addCustomerToDatabase={addCustomerToDatabase}/> : null}
            {updateCustomerByIdState ? <UpdateCustomerById  updateCustomerById={updateCustomerById}/> : null}
            {deleteCustomerByIdState ? <DeleteCustomerById deleteCustomerById={deleteCustomerById}/> : null}
        </section>
        </>

    )
}

export default CustomerOptions;