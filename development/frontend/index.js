import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import LoginPage from './components/Login/LoginPage.jsx';

import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";
import Pairing from "./components/pairings/pairing.component.jsx";
import AdminPanel from "./components/adminPanel/adminPanel.jsx"

import useToken from '../backend/api/useToken';
import jwtDecode from 'jwt-decode'

import './styles/index.stylesheet.scss';
import AboutPage from "./components/aboutPage/aboutPage.jsx";
import BottomPanel from "./components/bottomPanel/bottomPanel.jsx";

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <LoginPage setToken={setToken} />
  };

  if (document.getElementById('dot')) {
    document.getElementById('dot').remove();
  };

  try {
    // console.log(token);
    jwtDecode(token, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    console.log(err);
  };

  const [activePanel, setActivePanel] = useState('about');

  const pageSelector = () => {
    console.log(activePanel);
    switch (activePanel) {
      case "chickens":
        return <MainPanel />
      case "pairing":
        return <Pairing />
      case "accounts":
        return <AdminPanel />
      case "about":
        return <AboutPage />
    }
  }

  return (
    <StrictMode>
      <div className="container">
        <TopPanel />
        <section className="body-wrapper">
          <LeftPanel setActivePanel={setActivePanel} />
          {pageSelector()}
        </section>
        <BottomPanel />
      </div>
    </StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);
