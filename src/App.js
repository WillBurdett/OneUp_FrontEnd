import React from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter, Link} from "react-router-dom";
import Home from './pages/Home';
import Manager from './pages/manager/Manager';
import Customer from './pages/Customer';
import ManageAuthors from './pages/manager/ManageAuthors';
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
        <Route path="/manager-authors" exact element={<ManageAuthors/>}/>
      </Routes>
    </BrowserRouter> 
    </>
)
}

export default App;
