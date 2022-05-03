// Builds forgot password panel.
import React, { useState, useEffect, useRef } from 'react';
import read from '../../../backend/api/crud/read';
import emailjs from '@emailjs/browser';
import create from '../../../backend/api/crud/create';
// https://dashboard.emailjs.com/admin/account
// emailjs logins
//chickenpedigree@gmail.com
//chickenchicken
const ForgotPwPanel = () => {
    const [email, setEmail] = useState();
    const sendEmail = async (e) => {
        e.preventDefault();
        //sandrakaljula9@gmail.com

        // checks if a user with the given email exists
        let exists = await read.userExists(email);
        if (exists == undefined) {
            alert("No user with given email address exists in our system.");
            return;
        }

        //create random token value. Can change 7 to 2 for longer results.
        let token = (Math.random() + 1).toString(36).substring(7);
        console.log("random", token);
        create.createMailtoken(email, token); // that expires in 10 minutes

        //send the email
        var templateParams = {
            to_email: email,
            token: token
        };

        emailjs.send('service_g519zjy', 'template_9dzxoxf', templateParams, 'o56xON4hLUJsVdf_J')
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
                <h2> Send a recovery token to your email </h2>
                <form onSubmit={sendEmail}>
                    <label>Email</label>
                    <input type="email" name="to_email" onChange={e => setEmail(e.target.value)} />
                    <input type="submit" value="Forgot password" />
                </form>
            </div>
        </>

    )
}

export default ForgotPwPanel;