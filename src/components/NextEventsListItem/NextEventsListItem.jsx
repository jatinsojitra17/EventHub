import { useNavigate } from 'react-router-dom';
import styles from './NextEventsListItem.module.css';

export default function NextEventsListItem({ _id, title, date, location, attendees ,endDate,seats}) {
  const navigate = useNavigate();
  const eventDate = new Date(date);
  const eventTime = eventDate.toLocaleTimeString().substring(0, 4) + eventDate.toLocaleTimeString().substring(7);
  const EndingDate = new Date(endDate);
  const EndingTime = EndingDate.toLocaleTimeString().substring(0, 4) + EndingDate.toLocaleTimeString().substring(7);

  function handleClick(e) {
    e.preventDefault();
    navigate(`/events/${_id}`)
  }

  return (
    <li className={styles.eventLi} onClick={handleClick}>
      <h4>Starting At : {eventDate.toDateString()}&nbsp;&bull;&nbsp;{eventTime}</h4>
        <h4>Ending At : {EndingDate.toDateString()}&nbsp;&bull;&nbsp;{EndingTime}</h4>
        <h1>{title}</h1>
        <h5>{location.toUpperCase()}&nbsp;&bull;&nbsp;{attendees.length} attendee{attendees.length === 1 ? '' : 's'}&nbsp;&bull;&nbsp; Available Seats : {seats - attendees.length}&nbsp;&bull;&nbsp; Total Seats : {seats}</h5>
    </li>
  );
}