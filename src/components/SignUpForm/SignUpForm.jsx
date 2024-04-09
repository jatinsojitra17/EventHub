import React from "react";
import * as usersService from '../../utilities/users-service.js';
import styles from './SignUpForm.module.css';
import signup_img from './assets/signup-img.png'; 
export default class SignUpForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    })
  };

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;

      const user = await usersService.signUp(formData);
      this.props.setUser(user)
      this.props.setShowModal(!this.props.showModal)
      this.props.setButtonClicked(null)
    } catch(error) {
      console.log(error.message)
      this.setState({ error: 'Sign Up Failed - Try Again' })
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;

    return (
      <div className={styles.signupFormComponent}>
        <div className={styles.imgContainer}>
          <img src={signup_img} alt="" />
        </div>
        <div className={styles.formContainer}>
          <h1 className={styles.formHeading}>Join & Connect</h1>
          <form autoComplete="off" className={styles.signupForm} onSubmit={this.handleSubmit}>
            <label htmlFor="signup-name">Name</label><br/>
            <input type="text" id="signup-name" name="name" value={this.state.name} onChange={this.handleChange} required /><br/>
            <label htmlFor="signup-email">Email</label><br/>
            <input type="email" id="signup-email" name="email" value={this.state.email} onChange={this.handleChange} required /><br/>
            <label htmlFor="signup-password">Password</label><br/>
            <input type="password" id="signup-password" name="password" value={this.state.password} onChange={this.handleChange} required /><br/>
            <label htmlFor="signup-confirm">Confirm</label><br/>
            <input type="password" id="signup-confirm" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /><br/>
            <button type="submit" className={styles.btn} disabled={disable}>Sign Up</button>
          </form>
          <p className={styles.errorMessage}>&nbsp;{this.state.error}</p>
          <p>Already a member? <span className='modal-span' onClick={() => this.props.setButtonClicked('Sign In')}>Sign In</span></p>
        </div>
      </div>
    );
  }
}