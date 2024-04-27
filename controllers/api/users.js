import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../../models/userModel.js';
import { JWT_SECRET } from '../../server.js';

export async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // Token will be a String
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string. The client code needs to take this into consideration
    res.json(token)
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error)
  }
}

export async function login(req, res) {
  try {
    // Query database to find a user with the email provided using the filter object to find a User with the given email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error('User Not Found')

    // If we found a user with the given email, compare passwords
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error('Incorrect Password')

    const token = createJWT(user);

    res.json(token)
  } catch(error) {
    console.log(error.message)
    res.status(400).json(error)
  }
}

export function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log(req.user)
  // Sending the expiration date to the client (frontend)
  res.json(req.exp)
}

// Helper function
function createJWT(user) {
  return jwt.sign({ user }, JWT_SECRET, { expiresIn: '24h' })
}