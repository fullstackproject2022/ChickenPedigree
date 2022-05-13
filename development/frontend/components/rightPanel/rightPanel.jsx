import React from 'react'
import '../../styles/rightPanel.stylesheet.scss'

let prevSelect = '';
const RightPanel = ({ selected }) => {
    
    const closeNav = () => {
        // document.getElementById("rightPanel").style.width = "0px";
        document.getElementById("content").style.marginRight = "0px";
    }
    
    const getData = () => {

        prevSelect = selected;

        console.log(selected);
        console.log(prevSelect);
        
        document.getElementById("chickenID").style.content = selected;
    }

    return (
        <div className="sidenav" id="rightPanel">
            <a className="closebtn" onClick={() => {closeNav()}}>&times;</a>
            <div className="rightPanel-item"> 
                <span id="chickenID"></span>
            </div>
            {selected === prevSelect ? closeNav() : getData()}
        </div>
    )
};

export default RightPanel;