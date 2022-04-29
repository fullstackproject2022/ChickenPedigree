import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import './styles/index.stylesheet.scss';

import ChickenTable from "./components/table/chicken.table.jsx";
import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
<<<<<<< HEAD

// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './styles/index.stylesheet.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
=======
import MainPanel from "./components/mainPanel/main.panel.jsx";

// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
>>>>>>> origin/dev-sam


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


>>>>>>> origin/dev-sam
    </StrictMode>
}

/*

*/

//<ChickenTable />
ReactDOM.createRoot(document.getElementById("root")).render(< App />);


