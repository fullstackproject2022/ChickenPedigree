import React, { useState, useEffect } from 'react';
import read from '../../../backend/api/crud/read';
import Table from './table.jsx';



const ChickenTable = () => {
    const [chicken_data, setChickenData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        read.fetchPedigree("chicken") // returns it in object format
            .then(result => setChickenData(result))
    }
    if (chicken_data.length > 0) {
        const tableColumns = [ // not including children here
            { label: "Batch Year", key: "batchYear", sortable: true },
            { label: "Breed ID", key: "breed", sortable: true },
            { label: "Chicken ID", key: "_id", sortable: true },
            { label: "Sex", key: "sex", sortable: true },
            { label: "Status", key: "status", sortable: true },
            { label: "Mother ID", key: "fParent", sortable: true },
            { label: "Father ID", key: "mParent", sortable: true },
            { label: "Comments", key: "comments", sortable: false }
        ];

        return < Table data={chicken_data} columns={tableColumns} />
    }
}

export default ChickenTable;
