// Builds permissions panel.
import React, { useState, useEffect } from 'react';
import Button from "../standAloneComponents/button.jsx";
import read from '../../../backend/api/crud/read';
import updateUser from '../../../backend/api/crud/update';
import '../../styles/admin.stylesheet.scss'
import validateForm from './validateForm';


const UpdatePanel = ({ id, setPagePanel }) => {
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
        await read.fetchOne("users", id)//<---------------------here
            .then(result => setUserData(result))
    }

    const handleSubmit = async e => { // CHange to actual user update
        e.preventDefault();
        //console.log("update");
        const updateDetails = {
            username: username != undefined ? username : user_data.username,
            firstname: firstName != undefined ? firstName : user_data.firstname,
            lastname: lastName != undefined ? lastName : user_data.lastname,
            password: user_data.password,

            role: role != undefined ? role : user_data.role,
            admin: admin != undefined ? admin : user_data.admin,

            phone: phone != undefined ? phone : user_data.phone,
            phone2: phone2 != undefined ? phone2 : user_data.phone2,
            email: email != undefined ? email : user_data.email,
            email2: email2 != undefined ? email2 : user_data.email2,
        };
        //let err = validateForm.validate(updateDetails);
        await updateUser(updateDetails, id);
        if (err == 0) {

        }
        return (setPagePanel("AdminTable"));
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
                        <div><label>Role</label>
                            <select id="role" name="roles" onChange={e => setRole(e.target.value)}>
                                <option value="-">-</option>
                                <option value="Researcher">Researcher</option>
                                <option value="Postdoc">Postdoc</option>
                                <option value="PhD Student">PhD Student</option>
                                <option value="Assistant">Assistant</option>
                                <option value="MSc Student">MSc Student</option>
                                <option value="BSc Student">BSc Student</option>
                            </select>
                        </div>
                        <label>Admin</label>
                        <div className="floater" id='radio'>
                            <input type="radio" name="admin" value="true" onChange={e => setAdmin(e.target.value)} />
                            <label>True</label>
                            <input type="radio" name="admin" value="false" onChange={e => setAdmin(e.target.value)} />
                            <label>False</label>
                        </div>
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}



export default UpdatePanel;