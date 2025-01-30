import React from "react";
import "./App.css";
import Headers from "./components/Nav"
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import Home from "./components/Home";
import Reg from "./components/Reg";

function App(){
  return(
    <BrowserRouter>
    <Headers/>
    <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/reg" Component={Reg}/>
    
    </Routes>
    
    
    </BrowserRouter>
  )
}
export default App