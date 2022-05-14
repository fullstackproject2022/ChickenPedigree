import React from 'react'
import logo from "../../styles/assets/logo5.png"
import '../../styles/topPanel.stylesheet.scss'

const TopPanel = () => {

  const logOut = () => {
    console.log("call me")
    sessionStorage.clear()
    
    window.location.href = '/';
  }

  return (
    <div className='top-panel'>
      <div className='logo'>
        <img src={logo} alt="logo" className='logo-img' />
        <button className='log-out' onClick={() => {logOut()}}>Log out</button>
      </div>
    </div>
  )
}

export default TopPanel
