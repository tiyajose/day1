import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from './Pages/Login';
import NotFound from "./Pages/NotFound";
import Navbar1 from "./Units/Navbar1";


function App () {
  return (
    <div>
     <Navbar1>
   <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="" element={<NotFound/>} />
       </Routes>  
       </Navbar1>
    </div>
  );
}

export default App;
