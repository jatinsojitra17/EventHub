import { useState, useEffect, Fragment } from 'react';
import * as eventsService from '../../utilities/events-service.js';
import UpcomingEventsListItem from '../UpcomingEventsListItem/UpcomingEventsListItem.jsx';
import styles from './UpcomingEvents.module.css';

export default function UpcomingEvents({ user, makeRsvp, setMakeRsvp }) {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  

  useEffect(() => {
    async function getUpcomingEvents(userID, numOfEvents = 0) {
      try {
        const upcomingEvents = await eventsService.getUpcomingEvents(userID, numOfEvents);
        setUpcomingEvents(upcomingEvents)
      } catch(error) {
        console.log(error.message)
      }
    }
    getUpcomingEvents(user._id, 0)
  }, [makeRsvp])

  return (
    <section className={styles.upcomingEventsComponent}>
      <h1>Upcoming events</h1>
      <p>
        Here is the list of upcoming events you can still RSVP for.
      </p>
      <ul className={styles.upcomingEventsUl}>
        {
          upcomingEvents.map((event, idx) => {
            const currEventDate = new Date(event.date).toDateString();
            let dateChange = false;

            if (idx !== 0) {
              const prevEventDate = new Date(upcomingEvents[idx - 1].date).toDateString();
              if (currEventDate !== prevEventDate) dateChange = true
            } else {
              dateChange = true
            }

            return (
              <Fragment key={idx}>
                {
                  dateChange ? (
                    <h1>🗓️ {currEventDate}</h1>
                  ) : (
                    <></>
                  )
                }
                <UpcomingEventsListItem key={event._id} user={user} setRsvp={setMakeRsvp} {...event} />
              </Fragment>
            );
          })
        }
      </ul>
    </section>
  );
}