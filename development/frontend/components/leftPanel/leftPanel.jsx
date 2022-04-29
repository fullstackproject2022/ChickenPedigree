import React, { useState } from 'react'
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md"
import LeftPanelContent from "./LeftPanel.content.jsx"
import '../../styles/leftPanel.stylesheet.scss'
import Button from '../standAloneComponents/button.jsx';

const LeftPanel = () => {
    const [inactive, setInactive] = useState(false)
    const toggleButton = () => {
        setInactive(!inactive)
    }
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
                <div onClick={settingButton}>
                    <div className='left-panel-div'>
                        <AiIcons.AiFillSetting /><span>Settings</span>
                    </div>
                </div>
                <div onClick={toggleButton}>
                    <div className='left-panel-div'>
                        <MdIcons.MdAccountCircle /><span>Account</span>
                    </div>
                    <div className='User-name'></div>
                </div>

            </div>
        </div>
    )
}

export default LeftPanel
