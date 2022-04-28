// Builds permissions panel.
import React, { useState, useEffect } from 'react';
import Checkbox from "../standAloneComponents/checkbox.jsx";
import Button from "../standAloneComponents/button.jsx";
import read from '../../../backend/api/crud/read';
import './../../styles/updatePanel.stylesheet.scss'

// If fail use this https://www.youtube.com/watch?v=VCBxy8yczEg instead

const UpdatePanel = (id) => {
    const [user_data, setUserData] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        read.fetchOne("users", "626a7999006d0701adef3158") // returns it in object format ID
            .then(result => setUserData(result))
    }
    function update() {
        console.log("update");
    }
    return (
        <>{/*<span className="userShowPassword">{user_data.password}</span>*/}
            <div className="userContainer">
                <div className="userShow">
                    <h3 className="userTitle">User details</h3>
                    <label>Username</label><span className="userShowUsername">{user_data.username}</span><br />
                    <label>First name</label><span className="userShowFirstName">{user_data.firstname}</span><br />
                    <label>Last name</label><span className="userShowLastName">{user_data.lastname}</span><br />
                    <label>Role</label><span className="userShowRole">{user_data.role}</span><br />
                    <label>Admin</label><span className="userShowAdmin">{user_data.admin}</span><br />
                    <label><b>Contacts</b></label><br />
                    <label>Phone number</label><span className="userShowPhone">{user_data.phone}</span><br />
                    <label>Phone number 2</label><span className="userShowPhone2">{user_data.phone2}</span><br />
                    <label>Email</label><span className="userShowEmail">{user_data.email}</span><br />
                    <label>Email 2</label><span className="userShowEmail2">{user_data.email2}</span><br />
                </div>
                <div className="userUpdate">
                    <h3 className="userTitle">Edit here</h3>
                    <form className="userUpdateForm"> {/* UPDATE FORM (PW) */}
                        <div><label>Username</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.username}
                            />
                        </div>
                        <div><label>Firstname</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.firstname}
                            />
                        </div>
                        <div><label>Lastname</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.lastname}
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
                        <div className="floater">{/*fixx*/}
                            <input type="radio" name="admin" value={user_data.admin} />
                            <label>True</label>
                            <input type="radio" name="admin" value={!user_data.admin} />
                            <label>False</label>
                        </div>
                        <div><label>Phone</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.phone}
                            />
                        </div>
                        <div><label>Phone2</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.phone2}
                            />
                        </div>
                        <div><label>Email</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.email}
                            />
                        </div>
                        <div><label>Email2</label>
                            <input className="floater"
                                type="text"
                                placeholder={user_data.email2}
                            />
                        </div>
                        <Button text={"update"} onClick={update} />
                    </form>
                </div>
            </div>

        </>
    )
}
//<Checkbox label={"hello"} check={false} />
export default UpdatePanel;