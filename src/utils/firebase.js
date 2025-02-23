// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9fHjkaCRJubR-f6EWH2ZR4ECs1EhTnPw",
  authDomain: "netflixgpt-6918d.firebaseapp.com",
  projectId: "netflixgpt-6918d",
  storageBucket: "netflixgpt-6918d.firebasestorage.app",
  messagingSenderId: "1064996697142",
  appId: "1:1064996697142:web:3f6febed4224f5e3195497",
  measurementId: "G-1SD70DWHVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);