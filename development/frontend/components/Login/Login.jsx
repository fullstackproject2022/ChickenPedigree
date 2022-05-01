import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loginUser } from '../../../backend/api/crud/create';
import logo from "../../styles/assets/logo3.png";
import ForgotPwPanel from './forgotPwPanel.jsx';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  const ForgotPw = e => {
    e.preventDefault();
    console.log('forgot password');
    
  }

  return (
    <div className="login-wrapper">
      <div className='logo'>
          <img src={logo} alt="logo" className='logo-img'/>
      </div>
      <h1> Peck It </h1>
      <ForgotPwPanel />
      {/* <form onSubmit={handleSubmit}>
        <div>
          <p>Username</p>
          <input type="text" placeholder="Username" id="username" onChange={e => setUserName(e.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input type="password" placeholder="Password" id="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="submit" >
          <button type="submit">Submit</button>
        </div>
      </form> */}
    </div>
  )
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};