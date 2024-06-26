import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../server.js'; // Importing JWT_SECRET from the config file

export function checkToken(req, res, next) {
  // Check for the token being sent in a header or as a query parameter
  let token = req.get('Authorization') || req.query.token;

  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // Check if token is valid and not expired
    jwt.verify(token, JWT_SECRET, function(err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will exist
      req.user = err ? null : decoded.user;  
      // If your app cares... (optional)
      req.exp = err ? null : new Date(decoded.exp * 1000);  
      return next();
    })
  } else {
    // No token was sent
    req.user = null;
    return next();
  }
}
