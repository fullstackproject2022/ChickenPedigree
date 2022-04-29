<<<<<<< HEAD
import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
// import * as FaIcons from "react-icons/fa";
=======
import React, { useState } from 'react'
>>>>>>> dev-sam
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md"
import LeftPanelContent from "./LeftPanel.content.jsx"
import '../../styles/leftPanel.stylesheet.scss'
<<<<<<< HEAD
// import { IconContext } from 'react-icons';
import Button from '../standAloneComponents/button.jsx';

const LeftPanel = () => {
    // Inactive is the state of the left panel, when false it is closed and vice versa
=======
import Button from '../standAloneComponents/button.jsx';

const LeftPanel = () => {
>>>>>>> dev-sam
    const [inactive, setInactive] = useState(false)
    const toggleButton = () => {
        setInactive(!inactive)
    }
<<<<<<< HEAD

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




// const LeftPanel = () => {
//     const [sidebar, setSidebar] = useState(false)

//     const showSideBar = () => setSidebar(!sidebar)
//   return (
//     <>
//     <IconContext.Provider value={ {color:"#ffff"}}>
//       <div className="navbar">
//           <Link to="#" className="menu-bars">
//                 <FaIcons.FaBars onClick={showSideBar}/>
//           </Link>
//       </div>

//       <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className='nav-menu-items'>
//               <li className='navbar-toggle'>
//                   <Link to="#" className='menu-bars'>
//                       <AiIcons.AiOutlineClose onClick={showSideBar} className="nav-text"/>
//                   </Link>
//               </li>
//                 {LeftPanelContent.map((item, index) => {
//                     return(
//                         <li key={index} className={item.className}>
//                             <Link to={item.path}>
//                                 {item.icon}
//                                 <span className='nav-texts'>{item.title}</span>
//                             </Link>
//                         </li>
//                     )
//                 })}
//           </ul>
//       </nav>
//       </IconContext.Provider>
//     </>
//   )
// }

// export default LeftPanel
=======
    const settingButton = () => { toggleButton() }

    return (
        <div className={`left-panel ${inactive ? "inactive" : ""}`}>
            <div className='topOf-left-panel'>
                <div onClick={toggleButton} className='left-panel-toggle'>
                    {inactive ? <AiIcons.AiOutlineMenuFold /> : <AiIcons.AiOutlineMenuUnfold />}
                </div>
                <div className="divider"></div>
            </div>
            <div className='left-panel-items'>
                <div onClick={settingButton} className='left-panel-settingComp'>
                    <div className='left-panel-settings'>
                        <AiIcons.AiFillSetting /><span>Settings</span>
                    </div>
                </div>
                <div onClick={toggleButton} className='left-panel-footer'>
                    <div>
                        <MdIcons.MdAccountCircle />
                    </div>
                    <div className='User-name'></div>
                </div>

            </div>
        </div>
    )
}

export default LeftPanel
>>>>>>> dev-sam
