import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import LoginPage from './components/Login/LoginPage.jsx';
import LeftPanel from "./components/leftPanel/leftPanel.jsx";
import TopPanel from "./components/topPanel/TopPanel.jsx";
import MainPanel from "./components/mainPanel/main.panel.jsx";
import Pairing from "./components/pairings/pairing.component.jsx";
import History from "./components/historyPage/historyPanel.jsx";
import Accounts from "./components/adminPanel/accounts.jsx";
import useToken from '../backend/api/useToken';
import jwtDecode from 'jwt-decode'
import AboutPage from "./components/aboutPage/aboutPage.jsx";
import BottomPanel from "./components/bottomPanel/bottomPanel.jsx";
import './styles/index.stylesheet.scss';

function App() {

  function setFavicons(favImg) { // https://spemer.com/articles/set-favicon-with-javascript.html
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favImg);
    headTitle.appendChild(setFavicon);
  }
  setFavicons('https://spemer.com/img/favicon/favicon.png');


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
    console.log(err);
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
        return <Accounts />
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
