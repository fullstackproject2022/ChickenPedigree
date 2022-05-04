import React, { StrictMode, useEffect, useState } from "react"
import '../../styles/mainPanel.stylesheet.scss'
import ChickenTable from "../table/chicken.table.jsx"
import AdminPanel from "../adminPanel/adminPanel.jsx"

const MainPanel = () => {
    return <>
        <StrictMode>
            <div className="main-panel">
                <AdminPanel />
            </div>
        </StrictMode>

    </>
}

export default MainPanel