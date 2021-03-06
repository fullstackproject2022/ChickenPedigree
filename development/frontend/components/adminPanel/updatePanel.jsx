// Builds permissions panel.
import React, { useState, useEffect } from 'react';
import read from '../../../backend/api/crud/read';
import update from '../../../backend/api/crud/update';
import '../../styles/admin.stylesheet.scss'
import validateForm from '../../../backend/bin/validateForm';
import RoleAdmin from './RoleAdmin.jsx';


const UpdatePanel = ({ id, setPagePanel, setPage, adminPermission }) => {
    const [adminRights, setAdminRights] = useState(adminPermission)


    const [user_data, setUserData] = useState([])
    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [role, setRole] = useState();
    const [admin, setAdmin] = useState();
    const [phone, setPhone] = useState();
    const [phone2, setPhone2] = useState();
    const [email, setEmail] = useState();
    const [email2, setEmail2] = useState();

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await read.fetchOne("users", id)
            .then(result => setUserData(result))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const updateDetails = {
            username: username != undefined ? username : user_data.username,
            firstname: firstName != undefined ? firstName : user_data.firstname,
            lastname: lastName != undefined ? lastName : user_data.lastname,
            fullname: "",
            password: user_data.password,

            role: role != undefined ? role : user_data.role,
            admin: admin != undefined ? admin : user_data.admin,

            phone: phone != undefined ? phone + "" : user_data.phone + "",
            phone2: phone2 != undefined ? phone2 + "" : user_data.phone2 + "",
            email: email != undefined ? email : user_data.email,
            email2: email2 != undefined ? email2 : user_data.email2,
        };
        updateDetails.fullname = updateDetails.firstname + " " + updateDetails.lastname;

        let err = validateForm.validate(updateDetails);
        if (err == 0) {
            update.updateUser(updateDetails, id)
        }
        if (setPagePanel) {
            return setPagePanel("AdminTable")
        } else if (setPage) {
            return setPage("UserPanel")
        }

    }

    const adminSelector = () => {
        switch (adminRights) {
            case true:
                return <RoleAdmin setAdmin={setAdmin} setRole={setRole} />
            case false:
                return;
        }
    }


    return (
        <>
            <div className="userContainer">
                {/*Sidenote: On the left you see the current info and you can change the ones you would like on the right panel and leave the ones you do not want to change empty.*/}
                <div className="userShow">
                    <h3 className="userTitle">User details</h3>
                    <label>Username</label><span className="userShowUsername">{user_data.username}</span><br />
                    <label>First name</label><span className="userShowFirstName">{user_data.firstname}</span><br />
                    <label>Last name</label><span className="userShowLastName">{user_data.lastname}</span><br />
                    <label>Role</label><span className="userShowRole">{user_data.role}</span><br />
                    <label>Admin</label><span className="userShowAdmin">{user_data.admin + ""}</span><br />
                    <label><b>Contacts</b></label><br />
                    <label>Phone number</label><span className="userShowPhone">{user_data.phone}</span><br />
                    <label>Phone number 2</label><span className="userShowPhone2">{user_data.phone2}</span><br />
                    <label>Email</label><span className="userShowEmail">{user_data.email}</span><br />
                    <label>Email 2</label><span className="userShowEmail2">{user_data.email2}</span><br />
                </div>
                <div className="userUpdate">
                    <h3 className="userTitle">Edit here</h3>
                    <form className="userUpdateForm" onSubmit={handleSubmit}>
                        <div><label>Username</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div><label>Firstname</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.firstname}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div><label>Lastname</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.lastname}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                        {adminSelector()}
                        <div><label>Phone</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <div><label>Phone2</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.phone2}
                                onChange={e => setPhone2(e.target.value)}
                            />
                        </div>
                        <div><label>Email</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div><label>Email2</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.email2}
                                onChange={e => setEmail2(e.target.value)}
                            />
                        </div>
                        <div className='CreateSubmit'>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}



export default UpdatePanel;