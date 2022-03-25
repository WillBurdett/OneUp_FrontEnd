import React, { useState } from 'react';
import './App.css';
import { Navigate, Route, Routes, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import CustomerOrManager from './container/CustomerOrManager';
import ScrollToTop from './components/user-components/ScrollToTop';


function App() {

  const [isManager, setIsManager] = useState(0)

  const optionIsManager = input => input === 0 ? setIsManager(true) : setIsManager(false);

  return (
     <>
     <BrowserRouter>
     <ScrollToTop/>
       <Routes>
       <Route path="/" exact element={<Navigate replace to="/home" isManager={optionIsManager}/>}/>
        <Route path="/home" exact element={<Home isManager={optionIsManager}/>}/>
        <Route path="/manager?" exact element={<Navigate replace to="/manager" isManager={optionIsManager}/>}/>
        <Route path="/manager" exact element={<CustomerOrManager isManager={true}/>}/>
        <Route path="/customer" exact element={<CustomerOrManager isManager={isManager}/>}/>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App;
