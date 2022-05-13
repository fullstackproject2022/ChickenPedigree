import React, { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"; // need to make sure not all icons are being imported 
import { MdAccountCircle } from "react-icons/md"
import { BsFillEggFill } from "react-icons/bs"
import { GiChicken } from "react-icons/gi";
import { GrTest } from "react-icons/gr";
import { MdHistory } from "react-icons/md";

import '../../styles/leftPanel.stylesheet.scss'

const LeftPanel = ({ setActivePanel }) => {

    const [inactive, setInactive] = useState(false);

    const toggleButton = () => {
        setInactive(!inactive);
        if (inactive) {
            document.getElementById("content").style.marginLeft = "65px";
        }else {
            document.getElementById("content").style.marginLeft = "250px";
        }
    };

    const clickedtab = (panel) => {
        document.getElementById("content").style.marginLeft = "65px";
        let items = document.getElementsByClassName("left-panel-item");
        for (let i = 0; i < items.length; i++) {
            items[i].className = items[i].className.replace(" active", "");
        }


        let setActive = document.getElementsByClassName(`left-panel-item ${panel}`);
        // console.log(setActive[0].className);
        setActive[0].className += " active";

        setInactive(false);
        return (setActivePanel(panel));
    };

    return (
        <div className={`left-panel ${inactive ? "inactive" : ""}`}>
            <div className='top-left-panel'>
                <div onClick={toggleButton} className='left-panel-toggle'>
                    {inactive ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                </div>
                <div className="divider"></div>
            </div>

            <div className="left-panel-item chickens active" onClick={() => { clickedtab('chickens') }}>
                <div className="left-panel-div">
                    <GiChicken /><span>Chickens</span>
                </div>
            </div>

            <div className="left-panel-item pairing" onClick={() => { clickedtab('pairing') }}>
                <div className="left-panel-div">
                    <BsFillEggFill /><span>Pair</span>
                </div>
            </div>
            <div className="left-panel-item history" onClick={() => { clickedtab('history') }}>
                <div className="left-panel-div">
                    <MdHistory /><span>History</span>
                </div>
            </div>
            <div className="left-panel-item test" onClick={() => { clickedtab('test') }}>
                <div className="left-panel-div">
                    <GrTest /><span>Testing</span>
                </div>
            </div>

            <div className="bottom-left-panel">

                <div className="divider"></div>
                <div className="left-panel-item accounts" onClick={() => { clickedtab('accounts') }}>
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