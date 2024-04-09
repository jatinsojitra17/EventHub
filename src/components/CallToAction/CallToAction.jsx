import React from "react";
import styles from "./CallToAction.module.css";
import { useState } from 'react';
import splashimg from '../../assets/splash-img.png';
import Modal from '../Modal/Modal';

function CallToAction({ setUser }) {
    const [buttonClicked, setButtonClicked] = useState(null)
    const [showSignUpModal, setShowSignUpModal] = useState(false)

    return (
        <section className={styles.CallToActionSection}>
            <div className={styles.TextContainer}>
                <small>Gather Into one spot</small>
                <h1>Get Your Thoughts Going</h1>
                <p>
                    Track down other similar people with your equivalent advantages and gather into one spot to accomplish something uniquely great.
                    Join today to have the option to interface with others, either by facilitating your own occasions for individuals to join in or by conveying a RSVP to go to another person's.
                    Which gets going as an occasion gathering has the chance to bloom into a local area, and maybe even another component...
                </p>
                <button onClick={() => { setShowSignUpModal(!showSignUpModal); setButtonClicked('Sign Up') }}>Join The Gathering</button>
                {showSignUpModal ? <Modal setUser={setUser} showModal={showSignUpModal} setShowModal={setShowSignUpModal} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} /> : ''}
            </div>
                <div className={styles.imgContainer}>
                    <img src={splashimg} alt="SignUP" />
                </div>
        </section>
    );
}

export default CallToAction;