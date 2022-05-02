import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md"
import LeftPanelContent from "./LeftPanel.content.jsx"
import '../../styles/leftPanel.stylesheet.scss'
// import { IconContext } from 'react-icons';
import Button from '../standAloneComponents/button.jsx';

const LeftPanel = () => {
    // Inactive is the state of the left panel, when false it is closed and vice versa
    const [inactive, setInactive] = useState(false)
    const toggleButton = () => {
        setInactive(!inactive)
    }

    const settingButton = () => {
        // code for what the setting button will do 


 

        toggleButton()
    }


  return (
    <div className={`left-panel ${inactive ? "inactive" : ""}`}>
        <div className='topOf-left-panel'>

            
            <div onClick={toggleButton} className='left-panel-toggle'>


                {inactive ? <AiIcons.AiOutlineMenuFold /> : <AiIcons.AiOutlineMenuUnfold />}

                {/* <AiIcons.AiOutlineMenu /> */}
                
                {/* <button className='menu-button' onClick={toggleButton} style={{backgroundImage: AiIcons.AiOutlineMenu}}></button> */}
            </div>

            <div className="divider"></div>

            



            
        </div>

        <div className='left-panel-items'>

            <div onClick={settingButton} className='left-panel-settingComp'>

                {/* Text to appear after clicking settings button */}
                <div className='left-panel-settingsButton'>
                    
                    <AiIcons.AiFillSetting />
                </div>

                <h5>Settings</h5>

            </div>





            <div onClick={toggleButton} className='left-panel-footer'>

                <div className='account-icon'>
                    <MdIcons.MdAccountCircle />
                </div>

                <div className='User-name'>
                    {/* <h4></h4> this line will have the users name */}
                </div>

            </div>

        </div>



        
      
    </div>
  )
}

export default LeftPanel


// import React, { useState } from 'react'
// import * as AiIcons from "react-icons/ai";
// import * as MdIcons from "react-icons/md"
// import LeftPanelContent from "./LeftPanel.content.jsx"
// import '../../styles/leftPanel.stylesheet.scss'
// import Button from '../standAloneComponents/button.jsx';

// const LeftPanel = () => {
//     const [inactive, setInactive] = useState(false)
//     const toggleButton = () => {
//         setInactive(!inactive)
//     }
//     const settingButton = () => { toggleButton() }

//     return (
//         <div className={`left-panel ${inactive ? "inactive" : ""}`}>
//             <div className='topOf-left-panel'>
//                 <div onClick={toggleButton} className='left-panel-toggle'>
//                     {inactive ? <AiIcons.AiOutlineMenuFold /> : <AiIcons.AiOutlineMenuUnfold />}
//                 </div>
//                 <div className="divider"></div>
//             </div>
//             <div className='left-panel-items'>
//                 <div onClick={settingButton} className='left-panel-div'>
//                     <div className='left-panel-settings'>
//                         <AiIcons.AiFillSetting /><span>Settings</span>
//                     </div>
//                 </div>
//                 <div onClick={toggleButton} className='left-panel-footer'>
//                     <div>
//                         <MdIcons.MdAccountCircle />
//                     </div>
//                     <div className='User-name'></div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default LeftPanel
