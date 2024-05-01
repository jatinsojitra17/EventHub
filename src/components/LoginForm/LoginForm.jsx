import { useState } from 'react';
import * as usersService from '../../utilities/users-service.js';
import styles from './LoginForm.module.css';
import signin_img from '../../assets/signin-img.png';

export default function LoginForm({ setUser, showModal, setShowModal, setButtonClicked }) {
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault()
    try {
      const user = await usersService.login(credentials);
      setUser(user)
      setShowModal(!showModal)
      setButtonClicked(null)
      
    } catch(error) {
      console.log(error.message)
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className={styles.loginFormComponent}>
      <div className={styles.imgContainer}>
        <img src={signin_img} alt="" />
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.formHeading}>Welcome Back</h1>
        <form autoComplete="off" className={styles.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="login-emai">Email</label><br/>
          <input type="email" id="login-email" name="email" value={credentials.email} onChange={handleChange} required /><br/>
          <label htmlFor="login-password">Password</label><br/>
          <input type="password" id="login-password" name="password" value={credentials.password} onChange={handleChange} required /><br/>
          <button type="submit" className={styles.btn}>Sign In</button>
        </form>
        <p className={styles.errorMessage}>&nbsp;{error}</p>
        <p className="message">Not a member yet? <span className='modal-span' onClick={() => setButtonClicked('Sign Up')}>Sign Up</span></p>
      </div>
    </div>
  );
}