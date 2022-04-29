// Builds permissions panel.
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import read from '../../../backend/api/crud/read';
import update from '../../../backend/api/crud/update';
import './../../styles/updatePanel.stylesheet.scss';
import validateForm from './validateForm';


// Change password as well? Change id to parameter! Create user page?
const UpdatePanel = (id) => { // Change id where --------------------->
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
    const getData = () => {
        read.fetchOne("users", "626a7a71006d0701adef3159")//<---------------------here
            .then(result => setUserData(result))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("update");
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
        let err = validateForm.validate(updateDetails);
        if (err == 0) {
            update.updateUser(updateDetails, "626a7a71006d0701adef3159")//<---------------------here
        }
    }

    return (
        <>
            <span>Sidenote: On the left you see the current info and you can change the ones you would like on the right panel and leave the ones you do not want to change empty.</span>
            <div className="userContainer">
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
                        <div className="floater">{/*fixx*/}
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
=======
import Checkbox from "../standAloneComponents/checkbox.jsx";
import Button from "../standAloneComponents/button.jsx";
import read from '../../../backend/api/crud/read';

// If fail use this https://www.youtube.com/watch?v=VCBxy8yczEg instead

const UpdatePanel = (id) => {

    const [user_data, setUserData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        read.fetchOne("users", id) // returns it in object format
            .then(result => setUserData(result))
    }

    function update() {
        console.log("update");
    }


    return (
        <>
            <div className="user">
                <h1 className="userTitle">Edit the user here</h1>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <div className="userShowTopTitle">
                                <span className="userShowFullname">{user_data.fullname}</span>
                                <span className="userShowUserRole">{user_data.role}</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowUsername">{user_data.username}</span>
                            <span className="userShowFirstName">{user_data.firstname}</span>
                            <span className="userShowLastName">{user_data.lastname}</span>
                            <span className="userShowFullName">{user_data.fullname}</span>
                            {/*<span className="userShowPassword">{user_data.password}</span>*/}
                            <span className="userShowRole">{user_data.role}</span>
                            <span className="userShowAdmin">{user_data.admin}</span>

                            <span>Contacts</span>
                            <span className="userShowPhone">{user_data.phone}</span>
                            <span className="userShowPhone2">{user_data.phone2}</span>
                            <span className="userShowEmail">{user_data.email}</span>
                            <span className="userShowEmail2">{user_data.email2}</span>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm"> {/* UPDATE FORM (PW) */}
                            <div><label>Username</label>
                                <input
                                    type="text"
                                    placeholder={user_data.username}
                                />
                            </div>
                            <div><label>Firstname</label>
                                <input
                                    type="text"
                                    placeholder={user_data.firstname}
                                />
                            </div>
                            <div><label>Lastname</label>
                                <input
                                    type="text"
                                    placeholder={user_data.lastname}
                                />
                            </div>
                            <div><label>Fullname</label>
                                <input
                                    type="text"
                                    placeholder={user_data.fullname}
                                />
                            </div>
                            <div><label>Role</label>
                                <select id="role" name="roles">
                                    <option value="Researcher">Researcher</option>
                                    <option value="Postdoc">Postdoc</option>
                                    <option value="PhD Student">PhD Student</option>
                                    <option value="Assistant">Assistant</option>
                                    <option value="MSc Student">MSc Student</option>
                                    <option value="BSc Student">BSc Student</option>
                                </select>
                            </div>
                            <label>Admin</label>
                            <div>{/*fixx*/}
                                <input type="radio" id="true" name="admin" value={user_data.admin} />
                                <label>True</label>
                                <input type="radio" id="true" name="admin" value={!user_data.admin} />
                                <label>False</label>
                            </div>
                            <div><label>Phone</label>
                                <input
                                    type="text"
                                    placeholder={user_data.phone}
                                />
                            </div>
                            <div><label>Phone2</label>
                                <input
                                    type="text"
                                    placeholder={user_data.phone2}
                                />
                            </div>
                            <div><label>Email</label>
                                <input
                                    type="text"
                                    placeholder={user_data.email}
                                />
                            </div>
                            <div><label>Email2</label>
                                <input
                                    type="text"
                                    placeholder={user_data.email2}
                                />
                            </div>

                            <Button text={"update"} onClick={update} />

                        </form>
                    </div>
                </div>
            </div>
            <Checkbox label={"hello"} check={false} />

        </>

    )
}



>>>>>>> origin/dev-sam
export default UpdatePanel;