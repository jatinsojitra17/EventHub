import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as eventsService from '../../utilities/events-service.js';
import styles from './UpcomingEventsListItem.module.css';

export default function UpcomingEventsListItem({ setDeletedEvent, setRsvp, user, _id, title, date, location, description, createdBy, attendees}) {
  const navigate = useNavigate();
  const [userIsAttendee, setUserIsAttendee] = useState(null);

  const eventDate = new Date(date);
  const eventTime = eventDate.toLocaleTimeString().substring(0, 4) + eventDate.toLocaleTimeString().substring(7);

  function handleClick(e) {
    e.preventDefault();
    navigate(`/events/${_id}`)
  }

  async function handleDelete() {
    try {
      const deletedEvent = await eventsService.deleteEvent(_id);
      setDeletedEvent(true)
    } catch(error) {
      console.log(error.message)
    }
  }

  async function handleRSVP() {
    try {
      const rsvpEvent = await eventsService.rsvpEvent(_id, { user })
      setRsvp(true)
    } catch(error) {
      console.log(error.message)
    }
  }

  async function handleCancelRSVP() {
    try {
      const cancelRsvpEvent = await eventsService.cancelRsvpEvent(_id, { user })
      setRsvp(true)
    } catch(error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    async function isAnAttendee(userID) {
      for await(const attendee of attendees) {
        if (attendee === userID) {
          setUserIsAttendee(true)
          break;
        } else {
          setUserIsAttendee(false)
        } 
      }
      if (attendees.length === 0) setUserIsAttendee(false)
      setRsvp(false)
    }
    if (user) isAnAttendee(user._id);
  }, [])

  return (
    <li className={styles.eventLi}>
      <div className={styles.infoContainer}>
        <h3>Hosted by {createdBy.name}</h3>
        {
          user && user._id === createdBy._id ? (
            <div className={styles.linksContainer}>
              <Link to={`/events/${_id}/edit-event`} state={{_id, title, date, location, description, createdBy, attendees}} className={styles.manageEventsEdit}>Edit</Link>
              <span className={styles.manageEventsSpan}>|</span>
              <Link to={'/manage-events'} onClick={handleDelete} className={styles.manageEventsDelete}>Delete</Link>
            </div>
          ) : userIsAttendee ? (
            <div className={styles.linksContainer}>
              <Link onClick={handleCancelRSVP} className={styles.manageEventsDelete}>Cancel RSVP</Link>
            </div>
          ) : (
            <div className={styles.linksContainer}>
              <Link onClick={handleRSVP} className={styles.manageEventsDelete}>RSVP</Link>
            </div>
          )
        }
      </div>
      <div  onClick={handleClick}>
        <h4>{eventDate.toDateString()}&nbsp;&bull;&nbsp;{eventTime}</h4>
        <h1>{title}</h1>
        <h5>{location}&nbsp;&bull;&nbsp;{attendees.length} attendee{attendees.length === 1 ? '' : 's'}</h5>
        {description ? <p>{description}</p> : <p>No description.</p>}
      </div>
    </li>
  );
}