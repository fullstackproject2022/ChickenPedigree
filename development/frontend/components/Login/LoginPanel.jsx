import React, { useState } from 'react';

import create from '../../../backend/api/crud/create';

import '../../styles/login.stylesheet.scss';

export default function loginPanel({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await create.loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Username</p>
                <input required type="text" placeholder="Username" id="username" onChange={e => setUserName(e.target.value)} />
            </div>
            <div>
                <p>Password</p>
                <input required type="password" placeholder="Password" id="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="submit" >
                <button type="submit">Submit</button>
            </div>
        </form>
    )
};