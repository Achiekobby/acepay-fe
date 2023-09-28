import React, { useState, useEffect } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const Auth = () => {
  const [location, setLocation] = useState("login");

  useEffect(() => {
    const current_url = window.location.href;
    const parts = current_url.split("/");
    const last_part = parts[parts.length - 1];
    setLocation(last_part);
  }, []);

  return (
    <main>
      {location === "login" && <Login />}
      {location === "signup" && <Signup />}
    </main>
  );
};

export default Auth;
