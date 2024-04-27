import { useState, useEffect } from 'react';
import * as eventsService from '../../utilities/events-service.js'
import CallToAction from '../../components/CallToAction/CallToAction.jsx';
import PastEventListItem from '../../components/PastEventListItem/PastEventListItem.jsx';
import styles from './LandingPage.module.css';

export default function LandingPage({ setUser }) {
  const [pastEvents, setPastEvents] = useState([])

  useEffect(() => {
    async function getPastEvents(numOfEvents = 0) {
      try {
        const events = await eventsService.getPastEvents(numOfEvents)
        setPastEvents(events)
      } catch(error) {
        console.log(error.message)
      }
    }
    getPastEvents(5)
  }, [])

  return (
    <main>
      <CallToAction setUser={setUser} />
      <section className={styles.landingEventsSection}>
        <h1>Past events</h1>
        <p>
          Get a sense of what to expect when you join!
          There are plenty of different events assembled by a variety of people.
          Join today to find one you resonate with.
        </p>
        <ul className={styles.landingUl}>
          {
            pastEvents.map(event => {
              return (
                <PastEventListItem key={event._id} setUser={setUser} {...event} />
              );
            })
          }
        </ul>
      </section>
    </main>
  );
}