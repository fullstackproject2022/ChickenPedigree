// Builds permissions panel.
import React, { useState, useEffect } from 'react';
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



export default UpdatePanel;