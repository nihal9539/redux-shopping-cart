import React from "react";

import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit =(e)=>{
 e.preventDefault();
 //dispatch
 dispatch(authAction.login())
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
