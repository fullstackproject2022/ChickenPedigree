// Builds permissions panel.
import React, { useState } from 'react';
import create from '../../../backend/api/crud/create';
import '../../styles/admin.stylesheet.scss'
import validateForm from './validateForm';

const CreatePanel = ({ setPagePanel }) => {
    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [admin, setAdmin] = useState();
    const [phone, setPhone] = useState();
    const [phone2, setPhone2] = useState();
    const [email, setEmail] = useState();
    const [email2, setEmail2] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const createDetails = {
            username: username,
            firstname: firstName,
            lastname: lastName,
            fullname: firstName + " " + lastName,
            password: password,
            role: role,
            admin: admin,
            phone: phone,
            phone2: phone2,
            email: email,
            email2: email2,
        };
        let err = validateForm.validate(createDetails);
        if (err == 0) {
            create.createUser(createDetails);
        }
        return (setPagePanel("AdminTable"));
    }
    return (
        <>
            <div className='UpdateWrapper'>
                <h3>Create a new user here</h3>
                <form className="userUpdateForm" onSubmit={handleSubmit}>
                    <div><label>Username</label>
                        <input className="floater"
                            type="text"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div><label>Firstname</label>
                        <input className="floater"
                            type="text"
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div><label>Lastname</label>
                        <input className="floater"
                            type="text"
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div><label>Password</label>
                        <input className="floater"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
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
                        <div>
                            <input type="radio" name="admin" value="true" onChange={e => setAdmin(e.target.value)} />
                            <label>True</label>
                        </div>
                        <div>
                            <input type="radio" name="admin" value="false" onChange={e => setAdmin(e.target.value)} />
                            <label>False</label>
                        </div>
                    </div>
                    <div><label>Phone</label>
                        <input className="floater"
                            type="text"

                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div><label>Phone2</label>
                        <input className="floater"
                            type="text"

                            onChange={e => setPhone2(e.target.value)}
                        />
                    </div>
                    <div><label>Email</label>
                        <input className="floater"
                            type="text"

                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div><label>Email2</label>
                        <input className="floater"
                            type="text"

                            onChange={e => setEmail2(e.target.value)}
                        />
                    </div>
                    <div className='CreateSubmit'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default CreatePanel;