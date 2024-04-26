import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service.js';
import Modal from '../Modal/Modal.jsx';
import styles from './NavBar.module.css';

export default function NavBar({ user, setUser }) {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [buttonClicked , setButtonClicked] = useState(null)
  const navigate = useNavigate();

  function handleLogOut() {
    usersService.logOut()
    setUser(null)
    navigate('/')
  }

  return (
    <nav className={styles.navComponent}>
      {
        user ? (
          <button className={styles.btn} onClick={handleLogOut}>Log Out</button>
        ) : (
          <>
            <button className={`${styles.btn} ${styles.signUpBtn}`} onClick={() => { setShowSignUpModal(!showSignUpModal); setButtonClicked('Sign Up') }}>Sign Up</button>
            <button className={styles.btn} onClick={() => { setShowSignInModal(!showSignInModal); setButtonClicked('Sign In') }}>Sign In</button>
            {showSignUpModal ? <Modal setUser={setUser} showModal={showSignUpModal} setShowModal={setShowSignUpModal} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} /> : ''}
            {showSignInModal ? <Modal setUser={setUser} showModal={showSignInModal} setShowModal={setShowSignInModal} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} /> : ''}
          </>
        )
      }
    </nav>
  );
}