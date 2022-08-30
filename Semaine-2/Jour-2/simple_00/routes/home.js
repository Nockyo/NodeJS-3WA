import express from "express"
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Hello World",
                    count: req.session.count
    });

});

export default router;