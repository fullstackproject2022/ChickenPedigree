import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loginUser } from '../../../backend/api/crud/create';
import logo from "../../styles/assets/logo3.png";
import ForgotPwPanel from './forgotPwPanel.jsx';
import '../../styles/login.stylesheet.scss';

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
    <ForgotPw />;
  }

  return (
    <div className="login-wrapper">
      <div className='logo'>
          <img src={logo} alt="logo" className='logo-img'/>
      </div>
      <h1> Peck It </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Username</p>
          <input required type="text" placeholder="Username" id="username" onChange={e => setUserName(e.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input required type="password" placeholder="Password" id="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="submit" >
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="forgotPW" >
          <button onClick={ForgotPw}>Forget your Password?</button>
      </div>
    </div>
  )
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};