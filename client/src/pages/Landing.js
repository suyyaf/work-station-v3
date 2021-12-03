/* eslint-disable no-mixed-operators */
import React, { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const Landing = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 max-w-xs mx-auto relative">
        <div className="absolute inset-0 m-auto" style={{ height: "300px" }}>
          {isSignup
            ? <Signup handleClick={() => setIsSignup(!isSignup)} />
            : <Login handleClick={() => setIsSignup(!isSignup)} />}
        </div>
      </div>
      <div className="w-1/2 bg-green-400" />
    </div>
  );
};

export default Landing;
