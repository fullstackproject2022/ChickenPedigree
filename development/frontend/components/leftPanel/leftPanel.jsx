
import React, { useState } from 'react'
import * as AiIcons from "react-icons/ai"; // need to make sure not all icons are being imported 
import * as MdIcons from "react-icons/md"
import * as BsIcons from "react-icons/bs"

import '../../styles/leftPanel.stylesheet.scss'

const LeftPanel = () => {
    const [inactive, setInactive] = useState(false)
    const [settingSelect, setSettingSelect] = useState(false)
    const [accountSelect, setAccountSelect] = useState(false)

    const toggleButton = () => {
        setInactive(!inactive)
    }
    const settingButton = () => { setSettingSelect(!settingSelect) }
    const accountButton = () => { }
    const pairButton = () => { }

    return (
        <div className={`left-panel ${inactive ? "inactive" : ""}`}>
            <div className='topOf-left-panel'>
                <div onClick={toggleButton} className='left-panel-toggle'>
                    {inactive ? <AiIcons.AiOutlineMenuFold /> : <AiIcons.AiOutlineMenuUnfold />}
                </div>
                <div className="divider"></div>
            </div>
            <div className='left-panel-items'>

                <div tabIndex="1" onClick={pairButton}>
                    <div className="left-panel-div">
                        <BsIcons.BsFillEggFill /><span>Pair</span>
                    </div>
                </div>
                <div tabIndex="2" onClick={settingButton}>
                    <div className='left-panel-div'>
                        <AiIcons.AiFillSetting /><span>Settings</span>
                    </div>
                </div>
                <div tabIndex="3" onClick={accountButton}>
                    <div  className="left-panel-div">
                        <MdIcons.MdAccountCircle /><span>Account</span>
                    </div>
                    <div className='User-name'></div>
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
