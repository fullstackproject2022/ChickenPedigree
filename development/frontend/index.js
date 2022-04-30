import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import './styles/index.stylesheet.scss';

import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";
import ForgotPwPanel from "./components/login/forgotPwPanel.jsx";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {
    return <StrictMode>
        <ForgotPwPanel />


    </StrictMode>
}
/*
<div className="container">
            <TopPanel />
            <section className="body-wrapper">
                <LeftPanel />
                <MainPanel />
            </section>
        </div>
        <AdminPanel />
*/
ReactDOM.createRoot(document.getElementById("root")).render(< App />);


