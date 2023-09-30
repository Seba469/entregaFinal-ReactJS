import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.module.scss'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqgslx6ju1mpJXwgYDLowSXy9LwNK4or0",
  authDomain: "entregafinal-reactjs.firebaseapp.com",
  projectId: "entregafinal-reactjs",
  storageBucket: "entregafinal-reactjs.appspot.com",
  messagingSenderId: "847858520083",
  appId: "1:847858520083:web:c5f59c21f7545c9cf62fe6"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
