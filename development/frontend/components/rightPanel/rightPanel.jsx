
import React from 'react'

import '../../styles/rightPanel.stylesheet.scss'

const RightPanel = ({selected}) => {

    function closeNav() {        
        document.getElementById("rightPanel").style.width = "0px";
        document.getElementById("content").style.marginRight = "0px";
    }

    return (
        <div className="sidenav" id="rightPanel">
            <a className="closebtn" onClick={() => {closeNav()}}>&times;</a>
            <span>{selected}</span>
        </div>
    )
};

export default RightPanel;