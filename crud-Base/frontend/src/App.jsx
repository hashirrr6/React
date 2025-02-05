// import React, {useState} from "react";
// import "./App.css";
// import Headers from "./components/Nav";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Reg from "./components/Reg";
// import Login from "./components/Login";

// function App() {
//   const [user,setUser]=useState("")
//   return (
//     <BrowserRouter>
//       {/* Navigation Header */}
//       <Headers user={user} setUser={setUser} />

//       {/* Define Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/reg" element={<Reg />} />
//         <Route path="/login" element={<Login/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Reg from "./components/Reg";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  return (
    <BrowserRouter>
      {/* Pass user and setUser to Nav */}
      <Nav user={user} setUser={setUser} />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home setID={setUser} />} />  {/* Pass setUser as setID */}
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
