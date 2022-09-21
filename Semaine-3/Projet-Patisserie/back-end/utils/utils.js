import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path from "path";
import jwt from 'jsonwebtoken';

dotenv.config();
const {ACCESS_TOKEN_SECRET} = process.env;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function getViewsPatch() {
    return path.join(__dirname, "../views")
}

//Créer l'access token
export function generateAccessToken(data) {
    return jwt.sign({data}, ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});
}