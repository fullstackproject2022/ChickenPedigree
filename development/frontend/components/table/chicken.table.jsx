import React, { useState, useEffect } from 'react';
import read from '../../../backend/api/crud/read';
import Table from './table.jsx';

const ChickenTable = ({ selectedFilter = "", searchDetail = "", setNoResults, setChickenDataID}) => {
    const [chickenData, setChickenData] = useState([])
    const columns = [ // not including children here
        { label: "Batch Year", key: "batchYear", sortable: true },
        { label: "Breed ID", key: "breed", sortable: true },
        { label: "Chicken ID", key: "_id", sortable: true },
        { label: "Sex", key: "sex", sortable: true },
        { label: "Status", key: "status", sortable: true },
        { label: "Mother ID", key: "fParent", sortable: true },
        { label: "Father ID", key: "mParent", sortable: true },
        { label: "Comments", key: "comments", sortable: false }
    ]

    useEffect(() => {
         read.fetchCollection("chicken") // returns it in object format
            .then(async result => await setChickenData(
                selectedFilter === "" && searchDetail === ""
                    ? result
                    : result.filter((chicken) => {
                        const isNumber = (input) => (/^[\d]+$/).test(input)
                        const isString = (input) => (/^[a-zA-Z_]+$/).test(input)

                        if (isString(searchDetail)) {
                            if (chicken[selectedFilter].includes(searchDetail)) { 
                                setChickenDataID(oldArray => [...oldArray, chicken.id])
                                return chicken
                            }
                        }
                        else if (isNumber(searchDetail)) {
                            if (chicken[selectedFilter] == searchDetail) { 
                                setChickenDataID(oldArray => [...oldArray, chicken.id])
                                return chicken
                            }
                        }
                    })))


    }, [searchDetail, selectedFilter])

    // chickenData.forEach(chicken => {
    //     setChickenDataID(oldArray => [...oldArray, chicken.id])
    // })

    if (chickenData.length > 0) {
        //setNoResults(false)
        // chickenData.forEach(chicken => {
        //     setChickenDataID(oldArray => [...oldArray, chicken.id])
        // })
        return < Table data={chickenData} columns={columns} />
    }
    // else{
    //     setNoResults(true)
    // }

}
export default ChickenTable;