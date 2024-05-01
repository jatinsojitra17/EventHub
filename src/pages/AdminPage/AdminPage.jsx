import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as eventsService from '../../utilities/events-service';


export default function AdminPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const event = await eventsService.getEventsAwaitingApproval();
                // setEvents(event);
                console.log(event)
                // setEvents(...events,events);
            } catch (error) {
                console.error(error);
            }
        }
        fetchEvents();
    }, []);

    async function handleApprove(eventID) {
        try {
            await eventsService.approveEvent(eventID);
            setEvents(events.filter(event => event._id !== eventID));
        } catch (error) {
            console.error(error);
        }
    }

    async function handleReject(eventID) {
        try {
            await eventsService.rejectEvent(eventID);
            setEvents(events.filter(event => event._id !== eventID));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Admin Page</h1>
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        <Link to={`/events/${event._id}`}>{event.title}</Link>
                        <button onClick={() => handleApprove(event._id)}>Approve</button>
                        <button onClick={() => handleReject(event._id)}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
