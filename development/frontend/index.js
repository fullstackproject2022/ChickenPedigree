import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import LoginPage from './components/Login/LoginPage.jsx';

import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";


import useToken from '../backend/api/useToken';
import jwtDecode from 'jwt-decode'

import './styles/index.stylesheet.scss';

function App() {

    const { token, setToken } = useToken();

    if (!token) {
        return <LoginPage setToken={setToken} />
    };
    document.getElementById('dot').remove();

    try {
        // console.log(token);
        jwtDecode(token, process.env.TOKEN_SECRET);
        next();
    } catch (err) {
        console.log(err);
    };

    return (
        <StrictMode>
            <div className="container">
                <TopPanel />
                <section className="body-wrapper">
                    <LeftPanel />
                    <MainPanel />
                </section>
            </div>
        </StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);
