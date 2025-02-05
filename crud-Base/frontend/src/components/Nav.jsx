// import React from "react";
// import { Link } from "react-router-dom";
// import "../App.css";

// function Nav({user}){
//     return (
//         <>
//             <div className="main-head">
//                 <div className="nav">
//                     {/* Left Navigation */}
//                     <ul className="nav-left">
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/contact">Contact</Link>
//                         </li>
//                     </ul>

//                     {/* Right Navigation */}
//                     <div className="nav-right">
//                         <div className="profile">
//                             <span>{user? `Hello, ${user}` : "Loading..."}</span>
//                             {user?<Link to={"/login"} className="logout-button" onClick={logOut}>logout</Link>:<Link to ={"/login"}>Login</Link>}
//                         </div>
                   
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Nav;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav({ user, setUser }) {
  useEffect(() => {
    // Simulating API or local storage fetch
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser); // Set user from localStorage or API response
    }
  }, [setUser]);

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <div className="main-head">
        <div className="nav">
          {/* Left Navigation */}
          <ul className="nav-left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Right Navigation */}
          <div className="nav-right">
            <div className="profile">
              {user ? (
                <>
                  <span>Hello, {user}</span>
                  <Link to="/login" className="logout-button" onClick={logOut}>Logout</Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
