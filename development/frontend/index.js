import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ChickenTable from "./components/table/chicken_table.jsx";
import Login from './components/Login/Login.jsx';
import './styles/index-stylesheet.scss'
import useToken from './useToken';
import jwtDecode from 'jwt-decode'

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
        <div className="table_container">
            < ChickenTable />
        </div>
    </StrictMode>
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);