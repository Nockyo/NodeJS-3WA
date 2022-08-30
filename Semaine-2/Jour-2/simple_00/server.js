import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import home from './routes/home.js'

// ==========
// App initialization
// ==========

const hostname = 'localhost';
const port = 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// ==========
// App middlewares
// ==========

app.use(express.static(path.join(__dirname, "public")));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

const checkOddEven = (req, res, next) =>{
  if(req.params.number % 2 == 0)
    req.message = "Le nombre est pair."
  else
    req.message = "Le nombre est impair."

  next();
}

const incrementCount = (req, res, next) => {

  if(req.session.count)
    req.session.count++;

  else
    req.session.count = 1;

  console.log(req.session.count);
  next();
}

// ==========
// App routes
// ==========

app.get("/", incrementCount, home);

app.get("/check/:number", checkOddEven, (req, res) =>{
  const message = req.message
  res.json({message})
})

// ==========
// App start
// ==========

app.listen(port, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
