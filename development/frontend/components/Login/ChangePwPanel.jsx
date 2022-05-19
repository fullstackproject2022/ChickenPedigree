// Builds forgot password panel.
import React, { useRef, useState } from 'react';
import read from '../../../backend/api/crud/read';
//import emailjs from '@emailjs/browser';
import update from '../../../backend/api/crud/update';
import '../../styles/login.stylesheet.scss';

// https://dashboard.emailjs.com/admin/account
// emailjs logins
//chickenpedigree@gmail.com
//chickenchicken

const ChangePwPanel = ({ setPagePanel }) => {
    const [emailToken, setMailToken] = useState();
    const [pw, setPW] = useState();

    const form2 = useRef();
    const changePassword = async (e) => {

        e.preventDefault();
        //sandrakaljula9@gmail.com
        //let pw = form2.current.password.value;
        //let recieved_token = form2.current.recieved_token.value;

        // Check token exists & get email
        let mailtoken = await read.fetchOne("mailtoken", emailToken)
        let email = mailtoken.email;

        // Get user associated with email
        let user = await read.userExists(email);
        user.password = pw;
        console.log(user);

        // Change user password to the password given in the form
        await update.updatePassword(user, user._id);

        //Chnage create user in admin panel to this method as well!
        return (setPagePanel("ForgotPwPanel"));
    }

    return (
        <form ref={form2} onSubmit={changePassword}>
            <h1> Create a new password with a token sent to your email </h1>
            <div>
                <label>Token</label>
                <input type="text" name="token" onChange={e => setMailToken(e.target.value)} />
            </div>
            <div>
                <label>New password</label>
                <input type="password" name="password" onChange={e => setPW(e.target.value)} />
            </div>
            <div className="submit" >
                <button type="submit">Change Password</button>
            </div>
        </form>
    )
}


export default ChangePwPanel;