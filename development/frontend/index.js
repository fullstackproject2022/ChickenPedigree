import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ChickenTable from "./components/table/chicken_table.jsx";
import Login from './components/Login/Login.jsx';

import useToken from './useToken';
import jwtDecode from 'jwt-decode'
import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import './styles/index.stylesheet.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    try {
        console.log(token);
        const verified = jwtDecode(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json('Invalid Token');
    };

    return <StrictMode>
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
        {/* <AdminPanel /> */}
    </StrictMode>
} 

ReactDOM.createRoot(document.getElementById("root")).render(< App />);