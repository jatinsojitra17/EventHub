import { useState } from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import * as eventsService from '../../utilities/events-service.js';
import styles from './EditEventPage.module.css';

export default function EditEventPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const { eventID } = useParams();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        title: location.state.title,
        date: location.state.date,
        location: location.state.location,
        description: location.state.description,
        createdBy: location.state.createdBy._id,
        attendees: location.state.attendees
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
            const editedEvent = await eventsService.editEvent(eventID, formData)
            navigate(`/events/${eventID}`)
        } catch (error) {
            console.log(error.message)
        }
    }

    async function handleDelete() {
        try {
            const deletedEvent = await eventsService.deleteEvent(eventID);
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <main className={styles.editEventPage}>
            <div className={styles.editEventContainer}>
                <h1 className={styles.editEventHeading}>Edit event</h1>
                <div className={styles.linksContainer}>
                    <Link to={`/events/${eventID}`} className={styles.editEventBack}>Back</Link>
                    <span className={styles.editEventSpan}>|</span>
                    <Link to={'/dashboard'} onClick={handleDelete} className={styles.editEventDelete}>Delete</Link>
                </div>
            </div>
            <p className={styles.editEventMessage}>Edit the details of this event.</p>
            <form autoComplete="off" className={styles.editForm} onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <p>Give this event a title. Make it something descriptive of what the event entails.</p>
                <input value={formData.title} type="text" name="title" id="title" placeholder="Title your event" className={styles.titleInput} onChange={handleChange} required /><br />
                <label htmlFor="location">Location</label><br />
                <p>Add the location of where this event is taking place. Use a City and State (e.g. New York, NY) or Remote if the event is online.</p>
                <input value={formData.location} type="text" name="location" id="location" placeholder="Specify location" className={styles.locationInput} onChange={handleChange} required /><br />
                <label htmlFor="date">Date</label><br />
                {error ? <p className={styles.errorMessage}>{error}</p> : <p>Provide the future date & time when this event is taking place.</p>}
                <input value={formData.date.slice(0, 19)} type="datetime-local" name="date" id="date" className={styles.dateInput} onChange={handleChange} required /><br />
                <label htmlFor="description">Description</label><br />
                <p>Tell everyone what this event is about. Share as much or as little as you want.</p>
                <textarea value={formData.description} name="description" id="description" cols="50" rows="5" placeholder="Give a description" className={styles.descriptionInput} onChange={handleChange}></textarea><br />
                <button type="submit" className={styles.submitInput}>Edit</button>
            </form>
        </main>
    );
}