// Builds the whole admin panel.
import React, { useState, useEffect } from 'react';
import AdminTable from './adminTable/admin_table.jsx';
import UpdatePanel from './updatePanel.jsx';


const AdminPanel = () => {


    return (
        <>
            <AdminTable />
            <UpdatePanel />
        </>

    )
}



export default AdminPanel;