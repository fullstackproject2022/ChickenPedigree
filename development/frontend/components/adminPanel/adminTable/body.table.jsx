import React, { Component, useState, useEffect } from 'react';
import Button from "./button.jsx";
import deletion from '../../../../backend/api/crud/delete';


const TableBody = ({ columns, tableData, setPagePanel, setEditID }) => {


    function deleteUser(id) {
        // delete it on the database
        deletion.deleteUser(id);
        // delete from the table
        document.getElementById(id).remove();
        // log which id was deleted
        console.log("delete " + id);
    }


    function updateUser(_id) {
        //console.log("update button " + _id);
        return (setEditID(_id))
        //setPagePanel("UpdatePanel")
    }
    return (
        <tbody className='tbody'>
            {tableData.map((data) => {
                return (
                    <tr key={data._id} id={data._id}>
                        {columns.map(({ key }) => {
                            if (key == "delete") {
                                return <td key={key}><Button text={"delete"} onClick={deleteUser} id={data._id} /></td>
                            }
                            else if (key == "update") {
                                return <td key={key}>
                                    <Button text={"update"} onClick={updateUser} id={data._id} setPagePanel={setPagePanel} /></td>
                            }
                            else { // key != "delete" && key != "update"
                                return <td key={key}>{data[key] ? data[key] === "U" ? "" : data[key] : ""}</td>;
                            }
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;