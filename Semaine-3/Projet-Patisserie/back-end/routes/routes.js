import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js'
import PastriesController from '../controllers/pastries.js'
import UsersController from '../controllers/users.js';
import WinningsController from '../controllers/winnings.js';


router.get("/", HomeController);
router.get("/pastries", PastriesController);
router.get("/users", UsersController);
router.get("/winnings", WinningsController);

export default router