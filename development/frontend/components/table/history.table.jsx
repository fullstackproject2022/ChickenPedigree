import React, { useState, useEffect } from 'react';
import read from '../../../backend/api/crud/read';
import Table from './table.jsx';
const mongoose = require('mongoose')

const HistoryTable = () => {
    const [historyData, setHistoryData] = useState([])
    useEffect(() => {
        getData()
    }, [historyData])

    const setUsername = () => {
        var reformattedData = []
        historyData.map(async hd => {
            const newEntry = []
            const id = hd.userID
            await read.fetchOne("users", mongoose.Types.ObjectId(id)).then(res => newEntry.push(res))
            reformattedData = [...reformattedData, {
                _id: hd._id,
                historyID: hd.historyID,
                username: newEntry[0].username,
                fChickenID: hd.fChickenID,
                mChickenID: hd.mChickenID,
                createdAt: hd.createdAt
            }]
            reformattedData.length === historyData.length && setHistoryData(reformattedData)
        })
    }


    const getData = async () => {
        await read.fetchCollection("history") // returns it in object format
            .then(data => setHistoryData(data))
    }

    if (historyData.length > 0) {
        setUsername()
        const tableColumns = [ // not including children here
            { label: "Username", key: "username", sortable: true },
            { label: "F chicken id", key: "fChickenID", sortable: true },
            { label: "M chicken id", key: "mChickenID", sortable: true },
            { label: "Date paired", key: "createdAt", sortable: true }
        ];

        return < Table data={historyData} columns={tableColumns} />
    }
}

export default HistoryTable;