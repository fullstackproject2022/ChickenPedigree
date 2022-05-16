import React, { useRef, useEffect, useState } from "react"


const PedigreeYears = ({ years, chickens, setFilteredChickens }) => {
    const [filtered, setFiltered] = useState([])
    const [checkAll, setCheckAll] = useState(true)
    const allCheckBox = useRef()

    useEffect(() => {
        allHandler()
    }, [])

    useEffect(() => {
        filterChickens()
    }, [filtered])


    const filterChickens = () => {
        setFilteredChickens(chickens.filter(c => filtered.includes(c.batchYear)))
    }

    const ToggleSelect = (element, year) => {
        if (filtered.length != 0) allCheckBox.current.checked = false
        return element.target.checked ? [...filtered, year] : filtered.filter(f => f != year)
    }

    const selectAll = () => {
        const checkedElements = Array.from(document.getElementsByClassName('years-checkbox'))
        checkedElements.forEach(c => c.checked = checkAll)
    }

    const allHandler = () => {
        setCheckAll(!checkAll)
        selectAll()
        checkAll ? setFiltered(years) : setFiltered([])

    }

    return <>
        <div className="year">
            <div className="years-collected all-years">
                <input type="checkbox" value="All" onChange={allHandler} ref={allCheckBox} defaultChecked />
                <label>All</label>
            </div>
            {years.map((x) => {
                return <div className="years-collected" key={x * 2}>
                    <input type="checkbox" key={x * 13} onChange={(e) => setFiltered(ToggleSelect(e, x))} className="years-checkbox" />
                    <label key={x}>{x}</label>
                </div>
            })}
        </div>
    </>
}

export default PedigreeYears