// This file allows me to easily perform CRUD operations on our mongoose models in a node REPL. To test CRUD functionality with routes, use Postman

// Connect to the database
import './config/database.js';

// Require the Mongoose models
import { User } from './models/user.js';

// Local variables will come in handy for holding retrieved documents
let user;
let users;