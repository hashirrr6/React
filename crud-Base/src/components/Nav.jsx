import React from "react";
import { Link } from "react-router-dom";
import "../App.css";



function Nav({user}){
    return (
        <>
            <div className="main-head">
                <div className="nav">
                    {/* Left Navigation */}
                    <ul className="nav-left">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* Right Navigation */}
                    <div className="nav-right">
                        <div className="profile">
                            <span>{user? `Hello, ${user}` : "Loading..."}</span>
                            {user?<Link to={"/login"} className="logout-button" onClick={logOut}>logout</Link>:<Link to ={"/login"}>Login</Link>}
                        </div>
                   
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
