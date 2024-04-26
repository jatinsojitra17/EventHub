import { Event } from '../../models/eventModel.js';

// Query for events whose date are from before today's date
export async function getPastEvents(req, res) {
    const { numOfEvents } = req.params;

    try {
        const pastEvents = await Event.find({
            date: { $lt: new Date() }
        }).limit(numOfEvents).sort({ date: 'asc' });

        return res.json(pastEvents);
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ message: error.message });
    }
}

// Query for events whose date are from today and onward. Exclude events the user is hosting and attending
export async function getUpcomingEvents(req, res) {
    const { userID, numOfEvents } = req.params;

    try {
        const upcomingEvents = await Event.find({
            createdBy: { $ne: userID },
            attendees: { $ne: userID },
            date: { $gte: new Date() }
        }).limit(numOfEvents).sort({ date: 'asc' }).populate('createdBy');

        return res.json(upcomingEvents);
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ message: error.message });
    }
}

// Query for events whose date are from today and onward that the user is hosting
export async function getHostingEvents(req, res) {
    const { userID, numOfEvents } = req.params;

    try {
        const hostingEvents = await Event.find({
            createdBy: userID,
            date: { $gte: new Date() }
        }).limit(numOfEvents).sort({ date: 'asc' }).populate('createdBy');

        return res.json(hostingEvents);
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ message: error.message });
    }
}

// Query for events whose date are from today and onward that the user is attending
export async function getAttendingEvents(req, res) {
    const { userID, numOfEvents } = req.params;

    try {
        const attendingEvents = await Event.find({
            attendees: userID,
            date: { $gte: new Date() }
        }).limit(numOfEvents).sort({ date: 'asc' }).populate('createdBy');

        return res.json(attendingEvents);
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ message: error.message });
    }
}

// Query for an event by ID
export async function getEvent(req, res) {
    const { eventID } = req.params;

    try {
        const event = await Event.findById(eventID).populate('createdBy').populate('attendees');
        return res.json(event)
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ message: error.message })
    }
}

// Create a new event document
export async function createEvent(req, res) {
    try {
        await Event.create(req.body)
            .then(createdEvent => {
                return res.status(201).json({ message: 'Event Created' })
            })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message })
    }
}

// Edit an existing event document found by ID
export async function editEvent(req, res) {
    const { eventID } = req.params;

    try {
        const editedEvent = await Event.findByIdAndUpdate(eventID, req.body, { new: true })
        return res.json(editedEvent)
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message })
    }
}

// Delete an existing event document found by ID
export async function deleteEvent(req, res) {
    const { eventID } = req.params;

    try {
        const deletedEvent = await Event.findByIdAndDelete(eventID)
        return res.json(deletedEvent)
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message })
    }
}

// Add the logged in user to an event documents attendees array
export async function rsvpEvent(req, res) {
    const { eventID } = req.params;
    console.log(req.body)
    try {
        const rsvpEvent = await Event.findByIdAndUpdate(eventID,
            { $push: { attendees: req.body.user } },
            { new: true }
        ).populate('createdBy').populate('attendees');
        return res.json(rsvpEvent);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message })
    }
}

// Remove the logged in user from an event documents attendees array
export async function cancelRsvpEvent(req, res) {
    const { eventID } = req.params;

    try {
        const cancelRsvpEvent = await Event.findByIdAndUpdate(eventID,
            { $pull: { attendees: req.body.user._id } },
            { new: true }
        ).populate('createdBy').populate('attendees');
        return res.json(cancelRsvpEvent);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message })
    }
}