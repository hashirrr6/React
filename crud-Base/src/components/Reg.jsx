import "../css/Reg.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import apiPath from "./path";

function Reg() {
  const [data, setData] = useState({ username: "", email: "", password: "", cpassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    
    if (data.password !== data.cpassword) {
      setError("Passwords do not match");
      console.error("Not matching");
      

      return;
    }
    setLoading(true);                                        
    setError("");
    try {
      const res = await axios.post(`${apiPath()}/adduser`, data);
      if (res.status === 201) {
        alert(res.data.msg);
        setData({ username: "", email: "", password: "", cpassword: "" });
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
              
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="inp">
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={data.username}
            required
            onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={data.email}
            required
            onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={data.password}
            required
            onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="cpassword"
            name="cpassword"
            value={data.cpassword}
            required
            onChange={(e) => setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="btn">
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <Link to="/login">
        <div className="log">
          <span>Already Have An Account? Login</span>
        </div>
      </Link>
    </div>
  );
}

export default Reg;
