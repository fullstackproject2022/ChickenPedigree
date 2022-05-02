// Builds forgot password panel.
import React, { useState, useEffect, useRef } from 'react';
import read from '../../../backend/api/crud/read';
import emailjs from '@emailjs/browser';
import create from '../../../backend/api/crud/create';
// https://dashboard.emailjs.com/admin/account
// emailjs logins
//chickenpedigree@gmail.com
//chickenchicken
const ChangePwPanel = () => {

    const form = useRef();
    const changePassword = async (e) => {

        e.preventDefault();
        //sandrakaljula9@gmail.com
        let pw = form.current.password.value;
        let token = form.current.token.value;

    }

    return (
        <>
            <div className="forgotPassword">
                <h2> Create a new password with a token sent to your email </h2>
                <form ref={form} onSubmit={changePassword}>
                    <label>Token</label>
                    <input type="text" name="token" />
                    <label>New password</label>
                    <input type="password" name="password" />
                    <input type="submit" value="Change password" />
                </form>
            </div>
        </>

    )
}


export default ChangePwPanel;