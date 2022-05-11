import React from 'react';

const TableBody = ({ columns, tableData }) => {

    const expand = (id) => {
        console.log(id);
    };

    return (
        <tbody>
            {tableData.map((data, id) => {
                return (
                    <tr key={id} id={data._id} onClick={() => {expand(data._id)}}>
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
