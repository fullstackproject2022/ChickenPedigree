import React from 'react'
import '../../styles/bottomPanel.stylesheet.scss'

const BottomPanel = ({activePanel, setActivePanel}) =>  {

  return (
    <>

        <div className='footer'>
          
          <div onClick={() => {return (activePanel == "about" ? setActivePanel("chickens") : setActivePanel("about"))}} >About PeckIt</div>
        </div>
      
    </>
  )
}

export default BottomPanel
