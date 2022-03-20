import React, { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import CustomerOrManager from './container/CustomerOrManager';




function App() {

  const [isManager, setIsManager] = useState(0)

  const optionIsManager = input => input === 0 ? setIsManager(true) : setIsManager(false);

  return (
     <>
     <BrowserRouter>
       <Routes>
        <Route path="/" exact element={<Home isManager={optionIsManager}/>}/>
        <Route path="/manager" exact element={<CustomerOrManager isManager={isManager}/>}/>
        <Route path="/customer" exact element={<CustomerOrManager isManager={isManager}/>}/>
      </Routes>
    </BrowserRouter> 
    </>
)
}

export default App;
