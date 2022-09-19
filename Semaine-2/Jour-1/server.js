import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import kittens from "./routes/kitten.js"
import {port, BASE_URL} from "./config/index.js";

const app = express();

// Config express
const _dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(_dirname, "public")));

app.use('/', kittens)

app.listen(port, () => {
  console.log(`Example app listening at ${BASE_URL}`);
});
