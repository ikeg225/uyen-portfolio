import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../css/Contact.module.css';

export default function Contact({ title }) {
    const form = useRef();
    const [sent, setSent] = useState("notsent");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vv3drf2', 'template_lt1h38w', form.current, 'user_LLPQ8nevwOn6TFxqAdvLe')
        .then((result) => {
            setSent("success")
        }, (error) => {
            setSent("error")
        });
    };

    return (
        <div>
            <p className={styles.title}>{title}</p>
            <form ref={form} onSubmit={sendEmail}>
                <div className={styles.form}>
                    <div className={styles.leftForm}>
                        <input type="text" placeholder="your name" name="user_name"/>
                        <input type="email" placeholder="email address" name="user_email"/>
                    </div>
                    <div className={styles.rightForm}>
                        <textarea placeholder="your cool message..." name="message"/>
                    </div>
                </div>
                <input type="submit" value="Send" />
            </form>
            {sent === "success" && <p className={styles.message}>Email sent! I'll get back to you soon!</p>}
            {sent === "error" && <p className={styles.message}>Email failed to send. Please reach me at uyen.phann026@gmail.com!</p>}
        </div>
    )
}