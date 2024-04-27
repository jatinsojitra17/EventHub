import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import styles from './CallToAction.module.css';
import splashimg from '../../assets/splash-img.png';
export default function CallToAction({ setUser }) {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [buttonClicked , setButtonClicked] = useState(null)

  return (
    <section className={styles.callToActionSection}>
      <div className={styles.textContainer}>
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
        <img src={splashimg} alt="signup" />
      </div>
    </section>
  );
}