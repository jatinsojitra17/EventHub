import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as eventsService from '../../utilities/events-service.js'
import styles from './CreateEventPage.module.css';

export default function CreateEventPage({ user }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    endDate: '',
    seats: 0,
    location: '',
    description: '',
    createdBy: user._id,
    attendees: []
  })

  function handleChange(e) {
    if (e.target.name === 'date' && e.target.value < new Date().toISOString()) {
      setError('The date you chose has come already. Please choose a later date.')
      e.target.value = '';
      setFormData({ ...formData, [e.target.name]: '' })
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const createdEvent = await eventsService.createEvent(formData)
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <main className={styles.createEventPage}>
      <h1 className={styles.createEventHeading}>Create event</h1>
      <p className={styles.createEventMessage}>Create an event for others to attend.</p>
      <form autoComplete="off" className={styles.createForm} onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <p>Give this event a title. Make it something descriptive of what the event entails.</p>
        <input type="text" name="title" id="title" placeholder="Title your event" className={styles.titleInput} onChange={handleChange} required /><br />
        <label htmlFor="location">Location</label><br />
        <p>Add the location of where this event is taking place. Use a City and State (e.g. New York, NY) or Remote if the event is online.</p>
        <input type="text" name="location" id="location" placeholder="Specify location" className={styles.locationInput} onChange={handleChange} required /><br />
        <label htmlFor="date">Date</label><br />
        {error ? <p className={styles.errorMessage}>{error}</p> : <p>Provide the future date & time when this event is taking place.</p>}
        <input type="datetime-local" name="date" id="date" className={styles.dateInput} onChange={handleChange} required /><br />
        <label htmlFor="endDate">Ending Date</label><br />
        {error ? <p className={styles.errorMessage}>{error}</p> : <p>Provide the future date & time when this event will end.</p>}
        <input type="datetime-local" name="endDate" id="endDate" className={styles.dateInput} onChange={handleChange} required /><br />
        <label htmlFor="seats">Seats</label><br />
        <p>How many people can attend this event? Set a limit for the number of attendees.</p>
        <input type="number" name="seats" id="seats" placeholder="Number of seats" className={styles.seatsInput} onChange={handleChange} required /><br />
        <label htmlFor="description">Description</label><br />
        <p>Tell everyone what this event is about. Share as much or as little as you want.</p>
        <textarea name="description" id="description" cols="50" rows="5" placeholder="Give a description" className={styles.descriptionInput} onChange={handleChange}></textarea><br />
        <button type="submit" className={styles.submitInput}>Create</button>
      </form>
    </main>
  );
}