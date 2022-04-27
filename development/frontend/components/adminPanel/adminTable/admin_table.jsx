import React, { useState, useEffect } from 'react';
import read from '../../../../backend/api/crud/read';
import Table from './table.jsx';


const AdminTable = () => {
    const [user_data, setUserData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await read.fetchPedigree("users") // returns it in object format
            .then(result => setUserData(result))
    }

    if (user_data.length > 0) {
        const tableColumns = [ // not including children here
            { label: "Username", key: "username", sortable: true },
            { label: "Fullname", key: "fullname", sortable: true },
            { label: "Role", key: "role", sortable: true },
            { label: ".", key: "delete", sortable: false },
            { label: ".", key: "update", sortable: false }
        ];

        return < Table data={user_data} columns={tableColumns} />
    }
}

export default AdminTable;
