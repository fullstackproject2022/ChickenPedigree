// Builds forgot password panel.
import React, { useState } from 'react';
import read from '../../../backend/api/crud/read';
import emailjs from '@emailjs/browser';
import create from '../../../backend/api/crud/create';
import '../../styles/login.stylesheet.scss';


// https://dashboard.emailjs.com/admin/account
// emailjs logins
//chickenpedigree@gmail.com
//chickenchicken
export default function ForgotPwPanel({ setPagePanel }) {
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

        //create random email_token value. Can change 7 to 2 for longer results.
        let email_token = (Math.random() + 1).toString(36).substring(7);
        console.log("random", email_token);
        create.createMailtoken(email, email_token); // that expires in 10 minutes

        //send the email
        var templateParams = {
            to_email: email,
            token: email_token
        };

        emailjs.send('service_g519zjy', 'template_9dzxoxf', templateParams, 'o56xON4hLUJsVdf_J')
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
        alert("A login token has successfully been sent to your email.");

        return (setPagePanel("ChangePwPanel"));
    }


    return (
        <form onSubmit={sendEmail}>
            <div>
                <h1> Send a recovery token to your email </h1>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="to_email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="submit" >
                <button type="submit" value="Forgot password" >Forgot password</button>
            </div>
        </form>
    )
};