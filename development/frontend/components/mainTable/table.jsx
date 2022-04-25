import React, { useState } from 'react';
import TableBody from './body.table';
import TableHead from './head.table';

const Table = ({ data }) => {
    const [dbTableData, setTableData] = useState(data); // setTableData is the updater function

    const columns = [
        { label: "Student_ID", key: "s_id", sortable: true },
        { label: "Student name", key: "s_name", sortable: true },
        { label: "Course name", key: "c_name", sortable: true },
        { label: "Registration date", key: "reg", sortable: true }
    ];

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
                        a[field].toString().localeCompare(b[field].toString(),
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
            <table className="table">
                <caption>
                    Only the 5 most recent registrations are shown
                </caption>
                <TableHead columns={columns} doSort={doSort} />
                <TableBody columns={columns} tableData={dbTableData} />
                {/* <div className='add-user'></div> */}
            </table>
        </>
    );
};

export default Table;
