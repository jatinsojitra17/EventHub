import express from 'express';
import * as usersController from '../../controllers/api/users.js';
import { ensureLoggedIn } from '../../config/ensureLoggedIn.js';

const router = express.Router();

router.post('/', usersController.create)
router.post('/login', usersController.login)
router.get('/check-token', ensureLoggedIn, usersController.checkToken)

export default router;