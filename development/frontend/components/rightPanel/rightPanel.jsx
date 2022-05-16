import React, { useState } from 'react';
import '../../styles/rightPanel.stylesheet.scss';

let prevSelect = null;
const RightPanel = ({ selected }) => {
    
    const [active, setActive] = useState(false);
    
    const toggleNav = () => {
        console.log('toggle');
        setActive(!active);
        if (!active) {
            document.getElementById("content").style.marginRight = "0px";
            document.getElementById("rightPanel").style.width = "0px";
        }else {
            document.getElementById("content").style.marginRight = "250px";
            document.getElementById("rightPanel").style.width = "250px";
        }
    };
    
    const getData = () => {
        console.log('getData');
        return(selected);
    };

    return (
        <div id='rightPanel'>
            <div className="sidenav">
                <div className="top">
                    <a className="closebtn" onClick={toggleNav}>&times;</a>
                    {console.log(selected)}
                    {selected != 0 & prevSelect != selected ? getData : toggleNav} 
                    <div className="divider"></div>
                </div>
                <div className="rightPanel-item"> 
                </div>
            </div>
        </div>
    );
};

export default RightPanel;