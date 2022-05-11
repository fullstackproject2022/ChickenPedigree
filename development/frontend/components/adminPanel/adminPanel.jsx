// Builds the whole admin panel.
import React, { useState } from 'react';
import UpdatePanel from './updatePanel.jsx'
import CreatePanel from './createPanel.jsx'
import Button from '../../components/standAloneComponents/admin.button.jsx'
import AdminTable from '../../components/table/admin.table.jsx'
import '../../styles/admin.stylesheet.scss'
import UserStats from './userStats.jsx';

const AdminPanel = () => {
    const [panel, setPagePanel] = useState("AdminTable");
    const [editID, setEditID] = useState("");


    const switchPanel1 = () => {
        setPagePanel("CreatePanel");
    }

    const switchPanel2 = () => {
        setPagePanel("AdminTable");
    }

    const switchPanel3 = () => {
        setPagePanel("UserStats");
    }

    const pageSelector = () => {
        switch (panel) {
            case "AdminTable":
                return <AdminTable setPagePanel={setPagePanel} setEditID={setEditID} />
            case "UpdatePanel":
                return <UpdatePanel setPagePanel={setPagePanel} id={editID} />
            case "CreatePanel":
                return <CreatePanel setPagePanel={setPagePanel} />
            case "UserStats":
                return <UserStats setPagePanel={setPagePanel} />
        }
    }

    return (
        <>

            <div className='AdminWrapper'>
                <div className='AdminHeader'>
                    <Button text={"Admin Panel"} onClick={switchPanel2} className={"AdminBtn"} />
                    <Button text={"Create User"} onClick={switchPanel1} className={"AdminBtn"} />
                    <Button text={"User Stats"} onClick={switchPanel3} className={"AdminBtn"} />
                </div>
                <div className='AdminPanel'>
                    {pageSelector()}
                </div>
            </div>
        </>
    )
};

export default AdminPanel;