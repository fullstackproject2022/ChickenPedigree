import React, { Component } from 'react';

const TableBody = ({ columns, tableData }) => {
    return (
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        {columns.map(({ key }) => {
                            return <td key={key}>{data[key] ? data[key] : "——"}</td>;
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;