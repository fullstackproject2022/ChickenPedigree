import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import './styles/index.stylesheet.scss';

import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";
import AboveTable from "./components/aboveTableComp/AboveTable.jsx";

<<<<<<< HEAD
const App = () => {
    return <>
=======
import useToken from './useToken';
import jwtDecode from 'jwt-decode'



// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './styles/index.stylesheet.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ChangePwPanel from "./components/login/ChangePwPanel.jsx";

function App() {
    /*
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }
    
    try {
        console.log(token);
        const verified = jwtDecode(token, process.env.TOKEN_SECRET);
        console.log(verified);
        next();
    } catch (err) {
        console.log(err);
    };

    <StrictMode>
>>>>>>> main
        <div className="container">
            <TopPanel />
            <section className="body-wrapper">
                <LeftPanel />
                <MainPanel />
            </section>
        </div>
<<<<<<< HEAD
    </>
} 
=======
    </StrictMode>
*/
    return (
        <><ForgotPwPanel />
            <ChangePwPanel />
        </>
    )
}
>>>>>>> main

ReactDOM.createRoot(document.getElementById("root")).render(< App />);


