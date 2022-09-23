import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path from "path";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();
const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = process.env;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function getViewsPatch() {
    return path.join(__dirname, "../views")
}

//Créer l'access token
export function generateAccessToken(data) {
    return jwt.sign({data}, ACCESS_TOKEN_SECRET, {expiresIn: '3600s'});
}

//Créer l'access token
export function generateRefreshToken(data) {
    return jwt.sign({data}, REFRESH_TOKEN_SECRET, {expiresIn: '1y'});
}
 
// compare password
export async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}