import React from "react";
import { useState } from "react";
import CustomerOrManager from "../container/CustomerOrManager";
import Options from "../components/Options";

const Home = () => {

    const [optionSelected, setOption] = useState(true);
    const [isManager, setIsManager] = useState(false);

    const handleUserChoice = input => {
        if (input === 0){
            setIsManager(true);
            setOption(true);
        } else if (input === 1){
            setIsManager(false);
            setOption(true);
        }
    }           

    
    // pass handleUserChoice function and 'option' to Options
    return (
        <>
            {optionSelected ? <CustomerOrManager isManager={isManager}/> : <Options handleUserChoice={handleUserChoice}/>} 
        </>
    )
}

export default Home;