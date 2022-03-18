import Customer from "../pages/Customer";
import Manager from "../pages/Manager";


const CustomerOrManager = () => { // receives isManager

    const isManager = false;
return (
    <>
        {isManager ? <Manager/> : <Customer/>}
    </>
)
}

export default CustomerOrManager;