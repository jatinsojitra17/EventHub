export async function getPastEvents(numOfEvents) {
  const res = await fetch(`/api/events/past/${numOfEvents}`);
  return res.json();
}

export async function getUpcomingEvents(userID, numOfEvents) {
  const res = await fetch(`/api/events/upcoming/${userID}/${numOfEvents}`);
  return res.json();
}

export async function getHostingEvents(userID, numOfEvents) {
  const res = await fetch(`/api/events/hosting/${userID}/${numOfEvents}`);
  return res.json();
}

export async function getAttendingEvents(userID, numOfEvents) {
  const res = await fetch(`/api/events/attending/${userID}/${numOfEvents}`);
  return res.json();
}

export async function getEvent(eventID) {
  const res = await fetch(`/api/events/${eventID}`);
  return res.json();
}

export async function createEvent(formData) {
  const res = await fetch('/api/events/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return res.json();
}

export async function editEvent(eventID, formData) {
  const res = await fetch(`/api/events/${eventID}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return res.json();
}

export async function deleteEvent(eventID) {
  const res = await fetch(`/api/events/${eventID}`, { method: 'DELETE' });
  return res.json();
}

export async function rsvpEvent(eventID, userData) {
  const res = await fetch(`/api/events/rsvp/${eventID}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return res.json();
}

export async function cancelRsvpEvent(eventID, userData) {
  const res = await fetch(`/api/events/cancel-rsvp/${eventID}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return res.json();
}