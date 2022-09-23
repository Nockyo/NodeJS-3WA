import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
const {REFRESH_TOKEN_SECRET} = process.env;

export const refreshToken = (req, res) => {
    jwt.verify(token, REFRESH_TOKEN_SECRET, (err, data) => {
        if(err) {
            return res.sendStatus(401);
        }
        req.data = data;
        next();
    });
}