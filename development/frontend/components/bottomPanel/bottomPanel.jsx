import React from 'react'
import '../../styles/bottomPanel.stylesheet.scss'

const BottomPanel = ({setActivePanel}) =>  {

  return (
    <>

        <div className='footer'>
          
          <div onClick={() => {return (setActivePanel("about"))}} >About PeckIt</div>
        </div>
      
    </>
  )
}

export default BottomPanel
