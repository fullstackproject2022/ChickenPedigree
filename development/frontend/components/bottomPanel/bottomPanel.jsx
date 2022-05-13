import React from 'react'
import '../../styles/bottomPanel.stylesheet.scss'

const BottomPanel = ({ prevPanel, activePanel, setActivePanel }) => {

  return (
    <div className='footer'>

      <div onClick={() => {(activePanel == "about" ? setActivePanel(prevPanel) : setActivePanel("about"));}} >About PeckIt</div>
    </div>
  )
}

export default BottomPanel
