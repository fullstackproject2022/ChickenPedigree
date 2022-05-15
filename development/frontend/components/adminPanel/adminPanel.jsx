// Builds the whole admin panel.
import React, { useState, useEffect } from 'react';
import UpdatePanel from './updatePanel.jsx'
import CreatePanel from './createPanel.jsx'
import Button from '../../components/standAloneComponents/admin.button.jsx'
import AdminTable from '../../components/table/admin.table.jsx'
import '../../styles/admin.stylesheet.scss'
import UserStats from './userStats.jsx';

const AdminPanel = () => {
    const [panel, setPagePanel] = useState("AdminTable");
    const [editID, setEditID] = useState("");
    const [createPanelVis, setCreatePanelVis] = useState(false)
    const [adminPanelVis, setAdminPanelVis] = useState(true)
    const [statsPanelVis, setStatsPanelVis] = useState(false)

    useEffect(() => {

        if (panel === "CreatePanel"){
            setCreatePanelVis(true);
            setAdminPanelVis(false);
            setStatsPanelVis(false);
        }
        else if (panel === "AdminTable") {
            setCreatePanelVis(false);
            setAdminPanelVis(true);
            setStatsPanelVis(false);
        }
        else if (panel === "UserStats") {
            setCreatePanelVis(false);
            setAdminPanelVis(false); 
            setStatsPanelVis(true);
        }
    }, [panel])


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
                    <Button disabled={adminPanelVis} text={"Admin Panel"} onClick={switchPanel2} className={"AdminBtn2"} />
                    <Button disabled={createPanelVis} text={"Create User"} onClick={switchPanel1} className={"AdminBtn"} />
                    <Button disabled={statsPanelVis} text={"User Stats"} onClick={switchPanel3} className={"AdminBtn"} />
                </div>
                <div className='AdminPanel'>
                    {pageSelector()}
                </div>
            </div>
        </>
    )
};

export default AdminPanel;