import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ChickenTable from "./components/table/chicken_table.jsx";
import AdminPanel from "./components/adminPanel/adminPanel.jsx"
import './styles/index-stylesheet.scss';


const App = () => {
    return <StrictMode>
        <div >
            <AdminPanel />
        </div>
    </StrictMode>
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);

