import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import styles from './PastEventListItem.module.css';

export default function EventListItem({ setUser, title, date, location, description, createdBy, attendees }) {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [buttonClicked , setButtonClicked] = useState(null)

  const eventDate = new Date(date);
  const eventTime = eventDate.toLocaleTimeString().substring(0, 4) + eventDate.toLocaleTimeString().substring(7);

  return (
    <>
      <li className={styles.eventLi} onClick={() => { setShowSignUpModal(!showSignUpModal); setButtonClicked('Sign Up') }}>
        <h4>{eventDate.toDateString()}&nbsp;&bull;&nbsp;{eventTime}</h4>
        <h1>{title}</h1>
        <h5>{location}&nbsp;&bull;&nbsp;{attendees.length} attendee{attendees.length === 1 ? '' : 's'}</h5>
        {description ? <p>{description}</p> : <p>No description.</p>}
      </li>
      {showSignUpModal ? <Modal setUser={setUser} showModal={showSignUpModal} setShowModal={setShowSignUpModal} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} /> : ''}
    </>
  );
}