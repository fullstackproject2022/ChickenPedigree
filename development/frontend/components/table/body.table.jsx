import React from 'react';
import RightPanel from "../rightPanel/rightPanel.jsx";

const TableBody = ({ columns, tableData }) => {

    const selectItem = (selected) => {
        console.log(selected);
        return (<RightPanel selected={selected} />);
    }

    return (
        <tbody>
            {tableData.map((data, id) => {
                return (
                    <tr key={id} id={data._id} onClick={() => { selectItem(data._id) }}>
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
