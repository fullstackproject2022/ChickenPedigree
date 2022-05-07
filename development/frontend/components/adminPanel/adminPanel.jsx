// Builds the whole admin panel.
import React, { useState } from 'react';
import AdminTable from './adminTable/admin_table.jsx';
import UpdatePanel from './updatePanel.jsx'
import CreatePanel from './createPanel.jsx'
import Button from './adminTable/button.jsx'
import '../../styles/admin.stylesheet.scss'

const AdminPanel = () => {
    const [panel, setPagePanel] = useState("AdminTable");
    const [editID, setEditID] = useState("");


    const switchPanel1 = () => {
        setPagePanel("CreatePanel");
    }

    const switchPanel2 = () => {
        setPagePanel("AdminTable");
    }

    const pageSelector = () => {
        switch (panel) {
            case "AdminTable":
                return <AdminTable setPagePanel={setPagePanel} setEditID={setEditID} />
            case "UpdatePanel":
                return <UpdatePanel setPagePanel={setPagePanel} id={editID} />
            case "CreatePanel":
                return <CreatePanel setPagePanel={setPagePanel} />
        }
    }

    return (
        <>

            <div className='AdminWrapper'>
                <div className='AdminHeader'>
                    <Button text={"Admin Panel"} onClick={switchPanel2} className={"AdminBtn"} />
                    <Button text={"Create a new User"} onClick={switchPanel1} className={"AdminBtn"} />
                </div>
                <div className='AdminPanel'>
                    {pageSelector()}
                </div>
            </div>
        </>
    )
};

export default AdminPanel;