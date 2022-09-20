import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import path from "path";
import { fileURLToPath } from "url";

import route from "./routes/routes.js";

dotenv.config();
const {APP_HOST, APP_PORT, DB_URL} = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(init);

async function init () {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, "public")));
    app.use(
        session({
            name: "name",
            secret: "josdbvomsbdf",
            resave: false,
            saveUninitialized: true,
        })
    );
    try{
        app.use(route);
    } catch (err) {
        console.error(err.message);
    };
    app.listen(APP_PORT, () => {
        console.log(`App listening at http://${APP_HOST}:${APP_PORT}`);
    });
};

