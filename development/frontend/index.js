import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import LoginPage from './components/Login/LoginPage.jsx';

import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";
import AboveTable from "./components/aboveTableComp/AboveTable.jsx";

import useToken from '../backend/api/useToken';
import jwtDecode from 'jwt-decode'

import './styles/index.stylesheet.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

    const { token, setToken } = useToken();

    if (!token) {
        return <LoginPage setToken={setToken} />
    };
    document.getElementById('dot').remove();
    
    try {
        // console.log(token);
        const verified = jwtDecode(token, process.env.TOKEN_SECRET);
        // console.log(verified);
        next();
    } catch (err) {
        console.log(err);
    };

    return (
        <StrictMode>
            <div className="container">
                <TopPanel />
                <section className="body-wrapper">
                    <LeftPanel />
                    <MainPanel />
                </section>
            </div>
            <AdminPanel />
        </StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);
