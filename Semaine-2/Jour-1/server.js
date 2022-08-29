// import {hello} from './utils/hello.js'
//
// console.log(hello("Cc la famille"))


import {fileURLToPath} from "url"
import path from "path"
import express from "express";
const http = require("http");
const fs = require("fs");

const app = express();
const port = 8000;
const hostname = "localhost";

const BASE_URL = `http://${hostname}:${port}`;

const _dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(_dirname, "public")))

app.listen(port, () => {
    console.log(`Example app listening at ${BASE_URL}`);
});

