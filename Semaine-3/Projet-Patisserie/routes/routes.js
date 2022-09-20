import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js'

router.get("/", HomeController);
router.get("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
})

export default router;