import React, { useState } from 'react';

const TableBody = ({ columns, tableData }) => {
    
    return (
        <tbody>
            {tableData.map((data, id) => {
                return (
                    <tr key={id}>
                        {columns.map(({ key }) => {
                            return <td key={key}>{data[key] ? data[key] === "U" ? "" : data[key] : ""}</td>;
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
