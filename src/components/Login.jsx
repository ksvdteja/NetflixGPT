import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BACK_GROUND_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    // console.log(email.current.value);
    // console.log(password.current.value);
    setErrorMessage(message);

    if (message) return;

    // Sign In or Sign Up logic
    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="w-[118%] absolute">
        <img
          className="h-screen object-cover md:h-full"
          src={NETFLIX_BACK_GROUND_IMG}
          alt="netflix-back-ground-img"
        />
      </div>
      <div className="absolute w-[450px] my-36 p-12 mx-auto right-0 left-0 bg-black text-white opacity-85">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="User name"
              className="p-2 m-2 bg-black w-full h-13 rounded-sm border  border-gray-500"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="p-2 m-2 bg-black w-full h-13 rounded-sm border  border-gray-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 bg-black w-full h-13 rounded-sm border border-gray-500"
          />
          <p className="p-2 m-2 text-red-600">{errorMessage}</p>
          <button
            className="p-2 m-2 bg-red-600 w-full rounded-sm cursor-pointer hover:bg-red-500"
            onClick={handleButtonClick}
          >
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
