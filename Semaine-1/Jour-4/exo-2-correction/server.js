const http = require("http");

const shuffleUsers = require("./src/utils");

const port = 8080;
const users = ["Alan", "Sophie", "Sonia", "Clarisse"];

const server = http.createServer((req, res) => {
  let { url } = req;

  url = url.replace("/", "");

  if (url === "favicon.ico") {
    res.writeHead(200, {
      "Content-Type": "image/x-icon",
    });
    res.end();
    return;
  }

  if (url === "") {
    res.setHeader("Content-Type", "text/html;charset=utf8");
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
        <a href="/shuffle">shuffle</a>
        
    </body>
    </html>`);
  }

  if (url === "shuffle") {
    let randomizedUserList = shuffleUsers(users);
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

    ${randomizedUserList}
    
        <a href="/">back</a>
        
    </body>
    </html>`);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
