import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import LoginPage from './components/Login/LoginPage.jsx';
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";
import Pairing from "./components/pairings/pairing.component.jsx";
import History from "./components/historyPage/historyPanel.jsx";
import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import useToken from '../backend/api/useToken';
import jwtDecode from 'jwt-decode';
import AboutPage from "./components/aboutPage/aboutPage.jsx";
import BottomPanel from "./components/bottomPanel/bottomPanel.jsx";
import TestPage from "./components/testPage/testPage.jsx";
import RightPanel from "./components/rightPanel/rightPanel.jsx";

import './styles/index.stylesheet.scss';

let prevPanel = "";

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
    jwtDecode(token);

  } catch (err) {
    alert(err);
  };

  const [activePanel, setActivePanel] = useState('chickens');

  const pageSelector = () => {
    if (activePanel != "about") {
      prevPanel = activePanel;
    };
    // console.log(activePanel);
    // console.log(prevPanel);

    switch (activePanel) {
      case "chickens":
        return <MainPanel />
      case "pairing":
        return <Pairing />
      case "history":
        return <History />
      case "test":
        return <TestPage />
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
        <LeftPanel setActivePanel={setActivePanel} />
        <RightPanel selected={0} />
        <section className="body-wrapper" id="content">
          {pageSelector()}
        </section>
        <BottomPanel prevPanel={prevPanel} activePanel={activePanel} setActivePanel={setActivePanel} />
      </div>
    </StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);
