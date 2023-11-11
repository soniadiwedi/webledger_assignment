import React, { useState } from "react";
import Register from "./Register";
import "./auth.css";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [inp, setInp] = useState({ name: "", email: "", password: "" });

  const handleInput = (e) => {
    let val = e.target.value;
    let name = e.target.name;
    setInp((prev) => {
      return { ...prev, [name]: val };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(
        `http://localhost:8080/api/auth/login`,
        inp
      );
      console.log("res", res.data.message);
      toast.success(res.data.message, {
        position: "top-right", 
        autoClose: 3000, 
      });
    } catch (err) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right", 
        autoClose: 3000, 
      });
    }
  };
  return (
    <div className="container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form">
            <label for="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInput}
              required
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
              required
            />
            <button onClick={handleLogin}>Log in</button>
          </form>
        </div>
       <a href="https://github.com/login/oauth/authorize?client_id=e9fdb9c000e8ba656d91">
         <button>Continue with GitHub</button>
         </a>
        <Register />
      </div>
    </div>
  );
};

export default Login;
