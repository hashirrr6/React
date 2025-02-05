import "../css/Reg.css"
import { useState } from "react";
import axios from "axios";
import apiPath from "./path";
import { Link, useNavigate } from "react-router-dom";

function Login() {
   const [data, setData] = useState({ email: "", password: "" });
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();


   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const res = await axios.post(`${apiPath()}/login`, data)
         if (res.status === 200) {
            const { token, msg } = res.data;
            if (token) {
               console.log("Token Recieved", token);
               console.log("token", token);
               alert(msg)
               localStorage.setItem("token",token);
               setData({ email: "", password: "" });
               setTimeout(() => navigate("/"), 3000)
            }
         } else {
            alert("Login failed. Please try again.");
         }



      } catch (error) {
         alert(error)
      }

   };




   return (
      <div className="main">
         <form action="submit" onSubmit={handleSubmit} id="form">
            <div className="inp">
               <input type="text"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                  value={data.email}
                  required />
               <input type="text"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setData ((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                  value={data.password}
                  required
               />
            </div>
            <div className="btn">
               <button type="submit" disabled={loading}>{loading?"login inn...." :"Submit"}</button>
               </div>
         </form>
         <Link to="/reg">
            <div className="log">
               <span>Don't Have An Account? Sign Up </span>
            </div>

         </Link>

      </div>

   )
}
export default Login;

