import React, { useState } from "react"
import '../../styles/mainPanel.stylesheet.scss'
import ChickenTable from "../table/chicken.table.jsx"
import AboveTable from "../aboveTableComp/AboveTable.jsx"
import Table from "../table/table.jsx"


const MainPanel = () => {
    const [selectedFilter, setSelectedFilter] = useState("")
    const [selectedDetails, setselectedDetails] = useState("")
    const [noResults, setNoResults] = useState(false)
    const [chickenDataIDs, setChickenDataIDs] = useState([])
    const [currentTable, setCurrentTable] = useState("chicken")
    const [importTable, setImportTable] = useState(<Table />)

    const tableSelector = () => {
        switch (currentTable) {
            case "chicken": return <ChickenTable selectedFilter={selectedFilter} searchDetail={selectedDetails}
                setNoResults={setNoResults} setChickenDataIDs={setChickenDataIDs} />
            case "import": return importTable
        }
    }

    return <>
        <div className="parent-Main">
            <AboveTable setSelectedFilter={setSelectedFilter} setSelectedDetails={setselectedDetails}
                noResults={noResults} setCurrentTable={setCurrentTable} setImportTable={setImportTable}
                chickenDataIDs={chickenDataIDs} />
            <div className="main-panel">
                {tableSelector()}
            </div>
        </div>
    </>
}

export default MainPanel