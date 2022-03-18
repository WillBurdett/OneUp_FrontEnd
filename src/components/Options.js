const Options = ({handleUserChoice}) => {

    const managerSelected = () => {
        handleUserChoice(0)
    }
    
    const customerSelected = () => {
        handleUserChoice(1)
    }

    return (
        <>
        <h3>Manager or Customer?</h3>
        <button onClick={managerSelected}>Manager</button>
        <button onClick={customerSelected}>Customer</button>
        </>

    )
}

export default Options;