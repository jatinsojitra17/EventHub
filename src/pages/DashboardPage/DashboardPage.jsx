import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NextEvents from '../../components/NextEvents/NextEvents';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import styles from './DashboardPage.module.css';

export default function DashboardPage({ user }) {
  const [makeRsvp, setMakeRsvp] = useState(false);
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate('/create-event')
  }

  return (
    <main className={styles.dashboardPage}>
      <div className={styles.dashboardContainer}>
        <h1 className={styles.userName}>Welcome, {user.name.split(' ')[0]} 👋</h1>
        <button className={styles.btn} onClick={handleClick} >Create Event</button>
      </div>
      <NextEvents user={user} makeRsvp={makeRsvp} />
      <UpcomingEvents user={user} makeRsvp={makeRsvp} setMakeRsvp={setMakeRsvp} />
    </main>
  );
}