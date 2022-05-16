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
    const [adminvis, setAdminVis] = useState(true)
    const [createvis, setCreateVis] = useState(false)
    const [userStatvis, setUserStatVis] = useState(false)


    const switchPanel1 = () => {
        setPagePanel("CreatePanel");
        setCreateVis(true)
        setUserStatVis(false)
        setAdminVis(false)

    }

    const switchPanel2 = () => {
        setPagePanel("AdminTable");
        setCreateVis(false)
        setUserStatVis(false)
        setAdminVis(true)
    }

    const switchPanel3 = () => {
        setPagePanel("UserStats");
        setCreateVis(false)
        setUserStatVis(true)
        setAdminVis(false)
    }

    const pageSelector = () => {
        switch (panel) {
            case "AdminTable":
                return <AdminTable setPagePanel={setPagePanel} setEditID={setEditID} />
            case "UpdatePanel":
                return <UpdatePanel setPagePanel={setPagePanel} id={editID} adminPermission={true} />
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
                    <Button disabled={adminvis} text={"Admin Panel"} onClick={switchPanel2} className={"AdminBtn"} />
                    <Button disabled={createvis} text={"Create User"} onClick={switchPanel1} className={"AdminBtn"} />
                    <Button disabled={userStatvis} text={"User Stats"} onClick={switchPanel3} className={"AdminBtn"} />
                </div>
                <div className='AdminPanel'>
                    {pageSelector()}
                </div>
            </div>
        </>
    )
};

export default AdminPanel;