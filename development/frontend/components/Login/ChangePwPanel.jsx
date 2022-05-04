// Builds forgot password panel.
import React, { useState, useEffect, useRef } from 'react';
import read from '../../../backend/api/crud/read';
//import emailjs from '@emailjs/browser';
import update from '../../../backend/api/crud/update';
import '../../styles/login.stylesheet.scss';

// https://dashboard.emailjs.com/admin/account
// emailjs logins
//chickenpedigree@gmail.com
//chickenchicken

const ChangePwPanel = () => {

    const form2 = useRef();
    const changePassword = async (e) => {

        e.preventDefault();
        //sandrakaljula9@gmail.com
        let pw = form2.current.password.value;
        let token = form2.current.token.value;

        // Check token exists & get email
        let mailtoken = await read.fetchOne("mailtoken", token)
        let email = mailtoken.email;

        // Get user associated with email
        let user = await read.userExists(email);
        user.password = pw;
        console.log(user);

        // Change user password to the password given in the form
        await update.updatePassword(user, user._id);

        //Chnage create user in admin panel to this method as well!
    }

    return (
        <>
            <div className="login-wrapper">
                <h1> Create a new password with a token sent to your email </h1>
                <form ref={form2} onSubmit={changePassword}>
                    <label>Token</label>
                    <input type="text" name="token" /> <br />
                    <label>New password</label>
                    <input type="password" name="password" /><br />
                    <input type="submit" value="Change password" />
                </form>
            </div>
        </>

    )
}


export default ChangePwPanel;