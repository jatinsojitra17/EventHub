import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  seats: { type: Number, required: true },
  endDate: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, default: 'No Description' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  approved: { type: Boolean, default: false }
}, {
  timestamps: true
})

export const Event = mongoose.model('Event', eventSchema);