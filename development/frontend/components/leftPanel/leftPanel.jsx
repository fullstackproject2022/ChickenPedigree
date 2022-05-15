
import React, { useState, useEffect } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md"
import { BsFillEggFill } from "react-icons/bs"
import { GiChicken } from "react-icons/gi";
import { MdHistory } from "react-icons/md";

import '../../styles/leftPanel.stylesheet.scss'

const LeftPanel = ({ setActivePanel }) => {

    const [inactive, setInactive] = useState(false)

    const toggleButton = () => {
        // Will open and close the left panel
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

            <div className="left-panel-item" onClick={() => { setInactive(false); return (setActivePanel('chickens')) }}>
                <div className="left-panel-div">
                    <GiChicken /><span className='text'>Chickens</span>
                </div>
            </div>

            <div className="left-panel-item" onClick={() => { setInactive(false); return (setActivePanel('pairing')) }}>
                <div className="left-panel-div">
                    <BsFillEggFill /><span className='text'>Pair</span>
                </div>
            </div>
            <div className="left-panel-item" onClick={() => { setInactive(false); return (setActivePanel('history')) }}>
                <div className="left-panel-div">
                    <MdHistory /><span className='text'>History</span>
                </div>
            </div>

            <div className="bottom-left-panel">

                <div className="divider"></div>
                <div className="left-panel-item" onClick={() => { setInactive(false); return (setActivePanel('accounts')) }}>
                    <div className="left-panel-div">
                        <MdAccountCircle /><span className='text'>Account</span>
                    </div>
                    <div className='User-name'></div>
                </div>

            </div>

        </div>
    )
};

export default LeftPanel;