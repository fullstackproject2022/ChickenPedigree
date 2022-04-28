import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import './styles/index.stylesheet.scss';

import ChickenTable from "./components/table/chicken.table.jsx";
import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";

// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {
    return <StrictMode>

        <div className="entire-page">


            <div className="top-panel">
                <TopPanel />
            </div>

            <div className="left-panel">
                <LeftPanel />
            </div>

            <div className="main-panel">
                <MainPanel />
            </div>

        </div>

    </StrictMode>
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);


