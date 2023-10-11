import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMd7_hw_pyJeDd9SE8fAcDwbONXJpKo-I",
  authDomain: "entrega-final-react-d53de.firebaseapp.com",
  projectId: "entrega-final-react-d53de",
  storageBucket: "entrega-final-react-d53de.appspot.com",
  messagingSenderId: "927406288986",
  appId: "1:927406288986:web:01c86e97156a0520c76863",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
