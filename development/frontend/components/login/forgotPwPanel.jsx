// Builds forgot password panel.
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
// https://dashboard.emailjs.com/admin/account
// emailjs logins
//chickenpedigree@gmail.com
//chickenchicken
const ForgotPwPanel = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g519zjy', 'template_9dzxoxf', form.current, 'o56xON4hLUJsVdf_J')
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
        alert("A login token has successfully been sent to your email.");
    }


    return (
        <>
            <div className="forgotPassword">
                <h1> Send a recovery token to your email </h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="hidden" name="token" value={Math.floor(Math.random() * 100000)} />
                    <label>Email</label>
                    <input type="email" name="to_email" />
                    <input type="submit" value="Forgot password" />
                </form>
            </div>
        </>

    )
}

export default ForgotPwPanel;