export function ensureLoggedIn(req, res, next) {
  // If req.user does not exist, user is Unauthorized
  if (!req.user) return res.status(401).json('Unauthorized');
  next()
}