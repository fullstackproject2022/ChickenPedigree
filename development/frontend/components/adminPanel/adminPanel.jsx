// Builds the whole admin panel.
import React, { useState, useEffect } from 'react';
import AdminTable from './admin_table.jsx';

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