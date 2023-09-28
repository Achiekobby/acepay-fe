import React, {useEffect} from "react";
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import Login from "../components/signin/Login";
import Signup from "../components/Signup/Signup";

const Auth = () => {

  return (
    <main>

      <h1>Auth</h1>
      <Login/>
      <Signup/>
    </main>
  );
};

export default Auth;
