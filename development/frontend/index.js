import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import LoginPage from './components/Login/LoginPage.jsx';
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";
import Pairing from "./components/pairings/pairing.component.jsx";
import History from "./components/history/history.component.jsx";
import AdminPanel from "./components/adminPanel/adminPanel.jsx";
import useToken from '../backend/api/useToken';
import jwtDecode from 'jwt-decode';
import AboutPage from "./components/aboutPage/aboutPage.jsx";
import BottomPanel from "./components/bottomPanel/bottomPanel.jsx";
import './styles/index.stylesheet.scss';

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
    let decoded = jwtDecode(token);
    // console.log(decoded);
  } catch (err) {
    alert(err);
  };

  const [activePanel, setActivePanel] = useState('chickens');

  const pageSelector = () => {
    // console.log(activePanel);
    switch (activePanel) {
      case "chickens":
        return <MainPanel />
      case "pairing":
        return <Pairing />
      case "history":
        return <History />
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
        <BottomPanel setActivePanel={setActivePanel} />
      </div>
    </StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);
