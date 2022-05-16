import React, { useState } from 'react';
import PropTypes from 'prop-types';

import logo from "../../styles/assets/logo3.png";

import LoginPanel from './LoginPanel.jsx';
import ForgotPwPanel from './ForgotPwPanel.jsx';
import ChangePwPanel from './ChangePwPanel.jsx';

import '../../styles/login.stylesheet.scss';

export default function Login({ setToken }) {


  const [panel, setPagePanel] = useState("LoginPanel");


  const switchPanel = () => {
    if (panel === "LoginPanel") {
      setPagePanel("ForgotPwPanel");
      document.getElementById('switch').innerText = 'Login';
    } else if (panel === "ForgotPwPanel" || panel === "ChangePwPanel") {
      setPagePanel("LoginPanel");
      document.getElementById('switch').innerText = 'Forget Your Password?';
    }
  }

  const pageSelector = () => {
    // console.log(panel);
    switch (panel) {
      case "LoginPanel":
        return <LoginPanel setToken={setToken} />
      case "ForgotPwPanel":
        return <ForgotPwPanel setPagePanel={setPagePanel} />
      case "ChangePwPanel":
        return <ChangePwPanel setPagePanel={setPagePanel} />
    }
  }

  return (
    <div className="login-wrapper">
      <div className='logo'>
        <img src={logo} alt="logo" className='logo-img' />
      </div>
      <h1 className='peckIt'> Peck It </h1>

      {pageSelector()}

      <span id="switch" onClick={switchPanel} >Forget Your Password?</span>
    </div>
  )
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};