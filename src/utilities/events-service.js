import * as eventsAPI from './events-api.js';

export async function getPastEvents(numOfEvents) {
  const pastEvents = await eventsAPI.getPastEvents(numOfEvents);
  return pastEvents;
}

export async function getUpcomingEvents(userID, numOfEvents) {
  const upcomingEvents = await eventsAPI.getUpcomingEvents(userID, numOfEvents);
  return upcomingEvents;
}

export async function getHostingEvents(userID, numOfEvents) {
  const hostingEvents = await eventsAPI.getHostingEvents(userID, numOfEvents);
  return hostingEvents;
}

export async function getAttendingEvents(userID, numOfEvents) {
  const hostingEvents = await eventsAPI.getAttendingEvents(userID, numOfEvents);
  return hostingEvents;
}

export async function getEvent(eventID) {
  const event = await eventsAPI.getEvent(eventID);
  return event;
}

export async function createEvent(formData) {
  const createdEvent = await eventsAPI.createEvent(formData);
  return createdEvent;
}

export async function editEvent(eventID, formData) {
  const editedEvent = await eventsAPI.editEvent(eventID, formData);
  return editedEvent;
}

export async function deleteEvent(eventID) {
  const deletedEvent = await eventsAPI.deleteEvent(eventID);
  return deletedEvent;
}

export async function rsvpEvent(eventID, userData) {
  const rsvpEvent = await eventsAPI.rsvpEvent(eventID, userData);
  return rsvpEvent;
}

export async function cancelRsvpEvent(eventID, userData) {
  const cancelRsvpEvent = await eventsAPI.cancelRsvpEvent(eventID, userData);
  return cancelRsvpEvent;
}