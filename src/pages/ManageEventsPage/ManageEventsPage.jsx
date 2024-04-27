import { useState, useEffect, Fragment } from 'react';
import * as eventsService from '../../utilities/events-service.js';
import UpcomingEventsListItem from '../../components/UpcomingEventsListItem/UpcomingEventsListItem';
import styles from './ManageEventsPage.module.css';

export default function ManageEventsPage({ user }) {
  const [userEvents, setUserEvents] = useState([]);
  const [deletedEvent, setDeletedEvent] = useState(false);
  const [cancelledRsvp, setCancelledRsvp] = useState(false);

  function sortAscending(a, b) {
    if (a.date < b.date) {
      return -1
    } else if (a.date > b.date) {
      return 1
    } else {
      return 0
    }
  }

  useEffect(() => {
    async function getUserEvents(userID, numOfEvents = 0) {
      try {
        const hostingEvents = await eventsService.getHostingEvents(userID, numOfEvents);
        const attendingEvents = await eventsService.getAttendingEvents(userID, numOfEvents);
        const userEvents = [...hostingEvents, ...attendingEvents].sort(sortAscending);
        setUserEvents(userEvents)
        setDeletedEvent(false)
      } catch(error) {
        console.log(error.message)
      }
    }
    getUserEvents(user._id)
  }, [deletedEvent, cancelledRsvp])

  return (
    <main className={styles.manageEventsPage}>
      <h1>Manage events</h1>
      <p>
        Manage the events that you're hosting and attending. Update your event info, delete an event, or cancel an RSVP right from here.
      </p>
      {
        userEvents.length !== 0 ? (
          <ul className={styles.manageEventsUl}>
            {
              userEvents.map((event, idx) => {
                const currEventDate = new Date(event.date).toDateString();
                let dateChange = false;

                if (idx !== 0) {
                  const prevEventDate = new Date(userEvents[idx - 1].date).toDateString();
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
                    <UpcomingEventsListItem key={event._id} user={user} setDeletedEvent={setDeletedEvent} setRsvp={setCancelledRsvp} {...event} />
                  </Fragment>
                );
              })
            }
          </ul>
        ) : (
          <>
            <p className={styles.noUserEventsMessage}>You have not created or registered for any events</p>
            <svg className={styles.svg} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 13L14 17M14 13L10 17M3 9H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )
      }
    </main>
  );
}