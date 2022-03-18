import React from "react";
import { useState } from "react";

const Home = () => {

    const [isManager, setIsManager] = useState(false);

    

    return (
        <div>
            <h3>Manager or Customer?</h3>
        </div>
    )
}

export default Home;