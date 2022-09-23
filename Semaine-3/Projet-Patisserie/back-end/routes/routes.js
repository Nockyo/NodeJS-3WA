import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js'
import PastriesController from '../controllers/pastries.js'
import UsersController from '../controllers/users.js';
import WinningsController from '../controllers/winnings.js';
import LoginController from '../controllers/login.js'
import { register } from '../controllers/register.js'
import { yams } from '../controllers/yams.js'
import { authentificateToken } from '../middlewares/authentificate.js';
import { winners } from '../controllers/winners.js';
import { switchLog } from '../controllers/switchLog.js';
import { refreshToken } from '../controllers/refreshToken.js';

router.get("/", HomeController);
router.get("/pastries", PastriesController);
router.get("/users", UsersController);
router.get("/winnings", WinningsController);
router.post("/switchLog", switchLog);
router.post("/login", LoginController);
router.post("/register", register);
router.post("/refreshToken", refreshToken)
router.get("/yams", authentificateToken, yams);
router.get("/winners", winners);


export default router