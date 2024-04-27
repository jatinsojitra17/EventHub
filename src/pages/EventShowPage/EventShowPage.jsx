import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as eventsService from '../../utilities/events-service.js';
import Modal from '../../components/Modal/Modal.jsx';
import styles from './EventShowPage.module.css';

export default function EventShowPage({ user }) {
  const [showModal, setShowModal] = useState(false)
  const [userIsAttendee, setUserIsAttendee] = useState(null);
  const [event, setEvent] = useState(null);
  const { eventID } = useParams();

  useEffect(() => {
    async function getEvent(eventID) {
      try {
        const event = await eventsService.getEvent(eventID);
        setEvent(event)
      } catch(error) {
        console.log(error.message)
      }
    }
    getEvent(eventID)
  }, [])

  useEffect(() => {
    async function isAnAttendee(userID) {
      for await(const attendee of event.attendees) {
        if (attendee._id === userID) {
          setUserIsAttendee(true)
          break;
        } else {
          setUserIsAttendee(false)
        } 
      }
      if (event.attendees.length === 0) setUserIsAttendee(false)
    }
    if (event) isAnAttendee(user._id);
  }, [event])

  async function handleDelete() {
    try {
      const deletedEvent = await eventsService.deleteEvent(eventID);
    } catch(error) {
      console.log(error.message)
    }
  }

  async function handleRSVP() {
    try {
      const rsvpEvent = await eventsService.rsvpEvent(eventID, { user })
      setEvent(rsvpEvent)
    } catch(error) {
      console.log(error.message)
    }
  }

  async function handleCancelRSVP() {
    try {
      const cancelRsvpEvent = await eventsService.cancelRsvpEvent(eventID, { user })
      setEvent(cancelRsvpEvent)
    } catch(error) {
      console.log(error.message)
    }
  }
  
  return (
    <main className={styles.eventShowPage}>
      {
        event ? (
          <>
            <div className={styles.eventShowContainer}>
              <h3 className={styles.eventShowHost}><span>Hosted by</span> {event.createdBy.name}</h3>
              {
                user._id === event.createdBy._id ? (
                  <div className={styles.linksContainer}>
                    <Link to={`/events/${eventID}/edit-event`} state={event} className={styles.eventShowEdit}>Edit</Link>
                    <span className={styles.eventShowSpan}>|</span>
                    <Link to={'/dashboard'} onClick={handleDelete} className={styles.eventShowDelete}>Delete</Link>
                  </div>
                ) : userIsAttendee ? (
                  <div className={styles.linksContainer}>
                    <Link onClick={handleCancelRSVP} className={styles.eventShowDelete}>Cancel RSVP</Link>
                  </div>
                ) : (
                  <div className={styles.linksContainer}>
                    <Link onClick={handleRSVP} className={styles.eventShowDelete}>RSVP</Link>
                  </div>
                )
              }
            </div>
            <h1 className={styles.eventShowTitle}>{event.title}</h1>
            <div className={styles.detailsContainer}>
              <h4 className={styles.eventShowDate}>Starting At : {new Date(event.date).toDateString()}&nbsp;&bull;&nbsp;{new Date(event.date).toLocaleTimeString().substring(0, 4) + new Date(event.date).toLocaleTimeString().substring(7)}</h4>
              <span className={styles.eventShowSpan}>| &nbsp;</span>
              <h4 className={styles.eventShowDate}>Ending At : {new Date(event.endDate).toDateString()}&nbsp;&bull;&nbsp;{new Date(event.endDate).toLocaleTimeString().substring(0, 4) + new Date(event.date).toLocaleTimeString().substring(7)}</h4>
              <span className={styles.eventShowSpan}>| </span>
              <h4 className={styles.eventShowLocation} onClick={() => setShowModal(!showModal)}>{event.location.toUpperCase()}&nbsp;&bull;&nbsp;<span>{event.attendees.length} attendee{event.attendees.length === 1 ? '' : 's'}</span>&nbsp;&bull;&nbsp; Available Seats : {event.seats - event.attendees.length}&nbsp;&bull;&nbsp; Total Seats : {event.seats}</h4>
              {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} attendees={event.attendees} /> : ''}
            </div>
            {event.description ? <p className={styles.eventShowDescription}>{event.description}</p> : <p className={styles.eventShowDescription}>No description.</p>}
          </>
        ) : (
          <h1>Loading</h1>
        )
      }
    </main>
  );
}