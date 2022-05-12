import React, { useState, useEffect } from 'react';
import read from './../../../../backend/api/crud/read';
import Table from './table.jsx';


const HistoryTable = () => {
    const [history_data, setUserData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await read.fetchCollection("history") // returns it in object format
            .then(result => setUserData(result))
    }

    if (history_data.length > 0) {
        const tableColumns = [ // not including children here
            { label: "User id", key: "userID", sortable: true },
            { label: "F chicken id", key: "fChickenID", sortable: true },
            { label: "M chicken id", key: "mChickenID", sortable: true },
            { label: "Date paired", key: "createdAt", sortable: true }
        ];

        return < Table data={history_data} columns={tableColumns} />
    }
}

export default HistoryTable;