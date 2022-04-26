// Builds permissions panel.
import React, { useState, useEffect } from 'react';
import Checkbox from "./../standAloneComponents/checkbox.jsx";
import Button from "./../standAloneComponents/button.jsx";
//import read from './../../../backend/api/crud/read';


const PermissionsPanel = () => {
    function clicked() {
        console.log("click");
    }

    return (
        <>
            <Checkbox label={"hello"} check={false} />
            <Button text={"update"} onClick={clicked} />
        </>

    )
}



export default PermissionsPanel;