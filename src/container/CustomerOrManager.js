import Customer from "../pages/Customer";
import Manager from "../pages/manager/Manager";


const CustomerOrManager = ({isManager}) => { // receives isManager

return (
    <>
        {isManager ? <Manager/> : <Customer/>}
    </>
)
}

export default CustomerOrManager;