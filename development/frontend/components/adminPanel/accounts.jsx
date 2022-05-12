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

    useEffect(() => {
        setTokens();
    }, []);

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

    const pageSelector = () => {
        switch (page) {
            case "AdminPanel":
                return <AdminPanel setPagePanel={setPage} setEditID={currentUserID} />
            case "UserPanel":
                if (currentUserID === "") { } else {
                    return <UpdatePanel setPagePanel={setPage} id={currentUserID} />
                }
        }
    }

    return (
        <>
            <div className='AccountsWrapper'>
                <div className='AccountHeader'>
                    <Button text={"Admin Panel"} onClick={switchPanel1} className={"AdminBtn"} />
                    <Button text={"Update Panel"} onClick={switchPanel2} className={"AdminBtn"} />
                </div>
                <div className='AdminPanel'>
                    {pageSelector()}
                </div>
            </div>
        </>
    )
};

export default Accounts;