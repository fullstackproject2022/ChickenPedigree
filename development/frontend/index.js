import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ChickenTable from "./components/table/chicken_table.jsx";
import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import './styles/index.stylesheet.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {
    return <StrictMode>

        <Router>
            <LeftPanel />

            <Routes>

                <Route path="/" />

            </Routes>
        </Router>

        {/* <div>
            <LeftPanel />
        </div> */}
    </StrictMode>
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);

