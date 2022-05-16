// Builds the whole admin page.
import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode'
import UpdatePanel from './updatePanel.jsx'
import Button from '../standAloneComponents/admin.button.jsx'
import '../../styles/admin.stylesheet.scss'
import read from '../../../backend/api/crud/read.js';
import AdminPanel from './adminPanel.jsx';

const Accounts = () => {
    const [page, setPage] = useState("UserPanel");
    const [adminUser, setAdminUser] = useState("");
    const [currentUserID, setCurrentUserID] = useState("");
    const [updateVis, setUpdateVis] = useState(true)
    const [adminVis, setAdminVis] = useState(false)

    useEffect(() => {
        setTokens();
        
    }, []);

    useEffect(() => {
        setUpdateVis(prevState => !prevState)
        setAdminVis(prevState => !prevState)
    }, [page])


    // Current user id and if its admin or not
    const setTokens = async () => {
        try {
            var token = sessionStorage.getItem("token");
            var decoded = jwtDecode(token);
            setCurrentUserID(decoded._id);
            const user = await read.fetchOne("users", decoded._id)
            setAdminUser(user.admin)
            
        } catch (err) {
            console.log(err);
        };
    }

    const switchPanel1 = () => {
        if (adminUser) { // only admins can access the admin panel
            setPage("AdminPanel");
        }
    }
    const switchPanel2 = () => {
        setPage("UserPanel");
    }

    const showBtns = () => {
        if (adminUser) {
            return <>
                    <Button disabled={adminVis} text={"Admin Panel"} onClick={switchPanel1} className={"AdminBtn"} />
                    <Button disabled={updateVis} text={"Update Panel"} onClick={switchPanel2} className={"updateBtn"} />
            </>
        }
    }

    const pageSelector = () => {
        switch (page) {
            case "AdminPanel":
                // setAdminVis(true)
                // setUpdateVis(false)
                return <AdminPanel setPagePanel={setPage} setEditID={currentUserID} />
            case "UserPanel":

                if (currentUserID === "") { } else {
                    return <UpdatePanel setPage={setPage} id={currentUserID} adminPermission={adminUser} />
                }
        }
    }

    return (
        <>
            <div className='AccountsWrapper'>
                <div className='AccountHeader'>
                    {showBtns()}
                </div>
                <div className='AdminPanel'>
                    {pageSelector()}
                </div>
            </div>
        </>
    )
};

export default Accounts;