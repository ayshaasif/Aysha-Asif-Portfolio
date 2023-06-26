import React from 'react'
// import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
// import { StrictMode } from "react";
import {createRoot}  from "react-dom/client";


const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
        {/* <TApp/> */}
    </React.StrictMode>
)

