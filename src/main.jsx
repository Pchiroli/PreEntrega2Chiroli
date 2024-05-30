//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAUvHmRvh2XBG57dzrGckHFLVaWYB9xHg",
  authDomain: "pienso-bonito.firebaseapp.com",
  projectId: "pienso-bonito",
  storageBucket: "pienso-bonito.appspot.com",
  messagingSenderId: "577256020710",
  appId: "1:577256020710:web:86304beae5706ed9df7927"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
