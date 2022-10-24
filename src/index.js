import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import reportWebVitals from './reportWebVitals';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4BkxIP_GBpvRDMH8AsLi7BkGg3IDedo4",
  authDomain: "coderhouse-quetevendo.firebaseapp.com",
  projectId: "coderhouse-quetevendo",
  storageBucket: "coderhouse-quetevendo.appspot.com",
  messagingSenderId: "522135498194",
  appId: "1:522135498194:web:4afc2311ee7b40b22bec0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
