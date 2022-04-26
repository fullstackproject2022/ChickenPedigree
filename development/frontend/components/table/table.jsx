import React, { useState } from 'react';
import TableBody from './body.table.jsx';
import TableHead from './head.table.jsx';

const Table = ({ data, columns }) => {
    const [dbTableData, setTableData] = useState(data); // setTableData is the updater function

    // console.log(`columns ${columns}`)
    // console.log(`dbTableData ${dbTableData}`)
    // console.log(`setTableData ${setTableData}`)

    const doSort = (field, order) => {
        if (field) {
            const sortedData = [...dbTableData]
                .sort((a, b) => {
                    // null handling, may not be needed for app
                    if (a[field] === null) return 1;
                    if (b[field] === null) return -1;
                    if (a[field] === null && b[field] === null) return 0;
                    //______________________-------------------------------
                    return (
                        String(a[field]).localeCompare(String(b[field]),
                            "en",
                            {
                                numeric: true,
                            }) * (order === "asc" ? 1 : -1)
                    );
                });
            setTableData(sortedData)
        }
    };

    return (
        <>
            <h2>Navigate the tables to view the chicks</h2>
            <table className="table">
                <caption>
                    Only the 5 most recent registrations are shown
                </caption>
                <TableHead columns={columns} doSort={doSort} />
                <TableBody columns={columns} tableData={dbTableData} />
            </table>
        </>
    );
};

export default Table;
