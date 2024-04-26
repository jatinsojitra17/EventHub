// Import Packages
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';

// Without this, we'll get the error: ReferenceError: __dirname is not defined in ES module scope 
// Using ES Modules, inbuilt globals that were provided to CommonJS code won’t exist. These are: __dirname, __filename, exports, module, and require
// To get __dirname (and __filename) back, we add this code to the top of any file that needs it
// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

// Import Database
import './config/database.js';

// Import Custom Middleware
import { checkToken } from './config/checkToken.js';

// Import Routers
import usersRouter from './routes/api/users.js';
import eventsRouter from './routes/api/events.js';

// Allows us to be able to use a .env file to access environment variables using the process.env object
dotenv.config();

// Use PORT environment variable or 3001 (to avoid collision with React's dev server if it's using 3000)
const PORT = process.env.PORT || 3001

// Initialize express app
const app = express();

// Configure middleware that parses incoming JSON data and adds it to the req.body
app.use(express.json())

// Configure middleware to serve static files from the production build 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')))

// Configure middleware for concise output colored by response status for development use
// Red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes
app.use(morgan('dev'))

// Configure custom middleware that will add the user payload from the JWT to the express request object after verifying the token is valid and hasn't expired
app.use(checkToken)

// Routers
app.use('/api/users', usersRouter)
app.use('/api/events', eventsRouter)

// The following "catch all" route is necessary to return the prouction index.html on all non-AJAX requests
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Tell the express app to listen for incoming requests on the provided port
app.listen(PORT, console.log(`express listening on port ${PORT}`))