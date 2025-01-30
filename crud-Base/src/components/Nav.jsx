import React from "react";
import { Link } from "react-router-dom"; 
import "../App.css"; 
import Reg from "../components/Reg"

const Nav= () => {
    return(
        <>
        <div className="main-head">
            <div className="nav">
                <div className="nav-left">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                </div>
                <div className="nav-right">
                    <Link to={"/reg"} >
                    <button>signUp</button>
                    </Link>
                </div>
            </div>
        </div>
        
        
        
        </>
    )







}

export default Nav;