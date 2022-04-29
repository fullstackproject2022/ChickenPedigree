import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import './styles/index.stylesheet.scss';

<<<<<<< HEAD
import ChickenTable from "./components/table/chicken_table.jsx";
import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
=======
import ChickenTable from "./components/table/chicken.table.jsx";
import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";
>>>>>>> dev-sam

// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {
    return <StrictMode>
<<<<<<< HEAD

        <div className="entire-page">


            <div className="top-panel">
                <TopPanel />
            </div>

            <div className="left-panel">
                <LeftPanel />
            </div>


 
 
            {/* This is code for top and left panel */}
            {/* <Router>
                <LeftPanel />

                <Routes>

                    <Route path="/" />

                </Routes>
            </Router> */}

            {/* This is code for main chicken Table */}
            {/* <div>
                <ChickenTable />
            </div> */}


            {/* This is code for Admin panel */}
            {/* <AdminPanel /> */}

        </div>

=======
        <div className="container">
            <TopPanel />
            <section className="body-wrapper">
                <LeftPanel />
                <MainPanel />
            </section>
        </div>


>>>>>>> dev-sam
    </StrictMode>
} 

ReactDOM.createRoot(document.getElementById("root")).render(< App />);


