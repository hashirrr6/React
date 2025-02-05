// import React from "react";
// import "../App.css"
// import { Link } from "react-router-dom";
// import { useEffect,useState } from "react";
// import {  useNavigate } from "react-router-dom";
// import axios from "axios";
// import apiPath from "./path";


// function Home({setID}){
// const navigate=useNavigate()
// let [user,setUser]=useState(null);

// const getUser = async()=>{
//     const token=localStorage.getItem("token")
//     console.log(user);

//     if(!token){
//         alert("No token found")
//         setTimeout(()=>navigate("/login"),3000)
//         return;
//     }
//     console.log(token);
//     try {
//         const res=await axios.get(`${apiPath()}/home`,{
//             headers: {
//               Authorization: `Bearer ${token}`,
//             }
//         })
//         if(res.status===200){
//             console.log(res.data.username);
//             const name=res.data.username
//             setUser(name)
//             setID(name)
//         }
            



//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// useEffect(() => {
//     getUser();
//   }, []);


//     return(
//        <h1>hellooooooooo</h1>
//     )
// }

// export default Home
import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiPath from "./path";

function Home({ setID }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Redirecting to login...");
      navigate("/login"); 
      return;
    }

    try {
      const res = await axios.get(`${apiPath()}/home`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 200) {
        console.log("User:", res.data.username);
        setUser(res.data.username);
        setID(res.data.username);  // Correct usage of setID
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      alert("Session expired. Please login again.");
      localStorage.removeItem("token"); 
      navigate("/login"); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [setID]);  // Add setID as a dependency to avoid stale state issues

  return (
    <h1>{loading ? "Loading..." : `Hello, ${user || "Guest"}!`}</h1>
  );
}

export default Home;
