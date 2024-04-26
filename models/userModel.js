import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please include a name'] },
  email: { type: String, required: [true, 'Please include an email'], lowercase: true, unique: true },
  password: { type: String, required: [true, 'Please include a password'], minLength: 6 }
}, { 
  timestamps: true,
  // Even though it's hashed don't serialize the password (in other words, this won't return the password field to us when finding)
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
})

// Mongoose pre-save hook (Mongoose middleware) that will hash the password anytime the password has changed
userSchema.pre('save', async function(next) {
  // 'this' is the User document

  // If the document is unmodified, move on
  if (!this.isModified('password')) return next();

  // Update the password with the computed hash
  this.password = await bcrypt.hash(this.password, 6);
  return next();
})

export const User = mongoose.model('User', userSchema);