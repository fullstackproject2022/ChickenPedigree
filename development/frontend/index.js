import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ChickenTable from "./components/table/chicken_table.jsx";
import './styles/index-stylesheet.scss'


const App = () => {
    return <StrictMode>
        <div className="table_container">
            < ChickenTable />
        </div>
    </StrictMode>
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);

