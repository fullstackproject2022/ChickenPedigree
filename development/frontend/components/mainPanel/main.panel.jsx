import React, { useState } from "react"
import '../../styles/mainPanel.stylesheet.scss'
import ChickenTable from "../table/chicken.table.jsx"
import AboveTable from "../aboveTableComp/AboveTable.jsx"


const MainPanel = () => {
    const [selectedFilter, setSelectedFilter] = useState("")
    const [selectedDetails, setSelectedDetails] = useState("")

    return (
        <div className="parent-Main">
            <AboveTable setSelectedFilter={setSelectedFilter} setSelectedDetails={setSelectedDetails} />
            <div className="main-panel">
                <ChickenTable selectedFilter={selectedFilter} searchDetail={selectedDetails} />
            </div>
        </div>
    );
}

export default MainPanel