
import React, { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"; // need to make sure not all icons are being imported 
import { MdAccountCircle } from "react-icons/md"
import { BsFillEggFill } from "react-icons/bs"
import { GiChicken } from "react-icons/gi";

import '../../styles/leftPanel.stylesheet.scss'

const LeftPanel = ({ setActivePanel }) => {

    const [inactive, setInactive] = useState(false)

    const toggleButton = () => {
        setInactive(!inactive)
    }

    return (
        <div className={`left-panel ${inactive ? "inactive" : ""}`}>
            <div className='top-left-panel'>
                <div onClick={toggleButton} className='left-panel-toggle'>
                    {inactive ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                </div>
                <div className="divider"></div>
            </div>

            <div className="left-panel-item" onClick={() => { return (setActivePanel('chickens')) }}>
                <div className="left-panel-div">
                    <GiChicken /><span>Chickens</span>
                </div>
            </div>

            <div className="left-panel-item" onClick={() => { return (setActivePanel('pairing')) }}>
                <div className="left-panel-div">
                    <BsFillEggFill /><span>Pair</span>
                </div>
            </div>

            <div className="bottom-left-panel">
                
                <div className="divider"></div>
                <div className="left-panel-item" onClick={() => { return (setActivePanel('accounts')) }}>
                    <div className="left-panel-div">
                        <MdAccountCircle /><span>Account</span>
                    </div>
                    <div className='User-name'></div>
                </div>

            </div>

        </div>
    )
};

export default LeftPanel;