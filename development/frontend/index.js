import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ChickenTable from "./components/table/chicken.table.jsx";
import Login from './components/Login/Login.jsx';

import useToken from './useToken';
import jwtDecode from 'jwt-decode'
import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";

// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './styles/index.stylesheet.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

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

    return <StrictMode>

        <div className="entire-page">


            <div className="top-panel">
                <TopPanel />
            </div>

            <div className="left-panel">
                <LeftPanel />
            </div>




            {/* This is code for top and left panel */}
            <Router>
                <LeftPanel />

                <Routes>

                    <Route path="/" />

                </Routes>
            </Router>

            {/* This is code for main chicken Table */}
            <div>
                <ChickenTable />
            </div>


            {/* This is code for Admin panel */}
            <AdminPanel />

        </div>



    </StrictMode>
}


//<ChickenTable />
ReactDOM.createRoot(document.getElementById("root")).render(< App />);


