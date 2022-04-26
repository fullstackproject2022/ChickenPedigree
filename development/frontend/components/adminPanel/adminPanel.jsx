// Builds the whole admin panel.
import React, { useState, useEffect } from 'react';
import AdminTable from './../table/admin_table.jsx';
//import Checkbox from "./checkbox/checkbox.jsx";
import PermissionsPanel from './permissionsPanel.jsx';


const AdminPanel = () => {


    return (
        <>
            <AdminTable />
            <PermissionsPanel />
        </>

    )
}



export default AdminPanel;