import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="w-[118%] absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="netflix-back-ground-img"
        />
      </div>
      <div className="absolute w-[450px] my-36 p-12 mx-auto right-0 left-0 bg-black text-white opacity-85">
        <form>
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="User name"
              className="p-2 m-2 bg-black w-full h-13 rounded-sm border  border-gray-500"
            />
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-2 m-2 bg-black w-full h-13 rounded-sm border  border-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 bg-black w-full h-13 rounded-sm border border-gray-500"
          />
          <button className="p-2 m-2 bg-red-600 w-full rounded-sm cursor-pointer hover:bg-red-500">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up Now."
              : "Already a Member! Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
