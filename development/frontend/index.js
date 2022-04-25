import React from "react";
import ReactDOM from "react-dom/client";
import Table from "./components/table/table.jsx";
import './styles/master-stylesheet.scss'

var data = new Array();

const App = () => {
    return <div className="table_container">
        < Table data={data} />
    </div>
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);
    
