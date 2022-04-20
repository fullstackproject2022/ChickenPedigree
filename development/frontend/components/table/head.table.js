import React, { useState } from 'react';

const TableHead = ({ columns, doSort }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc"); // sets the ascending state

    const toggleSortDirection = (key) => {
        const sortOrder = key === sortField && order === "asc" ? "desc" : "asc";
        setSortField(key) // update state to reflect passed in key (fieldname)
        setOrder(sortOrder) // replace with boolean?
        doSort(key, sortOrder) // sort that is triggered from the parent Table component
    };
    return (
        <thead>
            <tr>
                {
                    columns.map(({ label, key, sortable }) => {
                        const cond = sortField && sortField === key
                        const setSortDirIcon = sortable
                            ? cond && order === 'asc'
                                ? 'up'
                                : cond && order == 'desc'
                                    ? 'down'
                                    : 'default'
                            : ''

                        return (
                            <th className={setSortDirIcon} key={key} onClick={sortable ? () => toggleSortDirection(key) : null}>
                                {label}
                            </th>
                        );
                    })
                }
            </tr>
        </thead>
    );
};

export default TableHead;
