import React, {useState} from "react";
import "./App.css";
import Headers from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Reg from "./components/Reg";
import Login from "./components/Login";

function App() {
  const [user,setID]=useState("")
  return (
    <BrowserRouter>
      {/* Navigation Header */}
      <Headers />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
