import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
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
        `http://localhost:8080/api/auth/register`,
        inp
      );
      console.log("res", res.data.message);
      toast.success(res.data.message, {
        position: "top-right", 
        autoClose: 3000, 
      });
      window.location.href="/login"
   
    } catch (err) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right", 
        autoClose: 3000, 
      });
    }
  };

  return (
    <div className="register">
      <form className="form">
        <label for="chk" aria-hidden="true">
          Register
        </label>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Username"
          onChange={handleInput}
          required
        />
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
        <button onClick={handleLogin}>Register</button>
      </form>
    </div>
  );
};

export default Register;
