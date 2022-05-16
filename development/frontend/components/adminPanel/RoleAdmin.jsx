// Builds permissions panel.
import React from 'react';
import '../../styles/admin.stylesheet.scss'


const RoleAdmin = ({ setAdmin, setRole }) => {

    return (
        <>
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
        </>
    )
}
export default RoleAdmin;