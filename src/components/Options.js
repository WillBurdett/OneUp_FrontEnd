const Options = ({handleUserChoice}) => {


    return (
        <>
        <h3>Manager or Customer?</h3>
        <button onClick={handleUserChoice(0)}>Manager</button>
        <button onClick={handleUserChoice(1)}>Customer</button>
        </>

    )
}

export default Options;