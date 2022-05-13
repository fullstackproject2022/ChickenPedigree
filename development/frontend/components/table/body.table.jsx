import React from 'react';
import RightPanel from "../rightPanel/rightPanel.jsx";

const TableBody = ({ columns, tableData }) => {

    const selectItem = (selected) => {
        <RightPanel selected={selected} />
        // document.getElementById("rightPanel").style.width = "250px";
        document.getElementById("content").style.marginRight = "250px";
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
