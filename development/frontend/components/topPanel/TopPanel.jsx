import React from 'react'
import logo from "../../styles/assets/logo5.png"
import '../../styles/topPanel.stylesheet.scss'

const TopPanel = () => {
  return (
    <div className='top-panel'>
      <div className='logo'>
        <img src={logo} alt="logo" className='logo-img' />
      </div>
    </div>
  )
}

export default TopPanel
