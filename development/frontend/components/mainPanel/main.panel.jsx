import React, { StrictMode, useEffect, useState } from "react"
import '../../styles/mainPanel.stylesheet.scss'
import ChickenTable from "../table/chicken.table.jsx"


const MainPanel = () => {
    return <>
        <StrictMode>
            <div className="main-panel">
                <ChickenTable />
            </div>
        </StrictMode>

    </>
}

export default MainPanel