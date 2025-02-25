import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-56"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-10 h-10 m-2"
            src={USER_ICON}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="bg-black text-white cursor-pointer h-10 w-24 m-2 rounded-sm border border-gray-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
