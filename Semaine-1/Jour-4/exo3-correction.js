const http = require("http");
const fs = require("fs");

const port = 8080;

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
    res.writeHead(404);
    res.end();
    return;
  }

  if (url === "all") {
    fs.readFile("./src/students.json", "utf8", (err, data) => {
      if (err) {
        res.end(err);
        return;
      }
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(data);
    });
  }

  if (url.includes("search")) {
    const searchParam = url.split("/")[1];

    fs.readFile("./src/students.json", "utf8", (err, data) => {
      console.log("data", typeof data);
      if (err) {
        res.end(err);
        return;
      }
      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      let json = Object.values(JSON.parse(data).students);
      [json] = json.filter(
        (element) => element.name.toLowerCase() === searchParam
      );
      console.log(typeof json);
      if (json !== undefined) {
        res.end(JSON.stringify(json, null, 4));
        return;
      } else {
        res.writeHead(404);
        res.end();
        return;
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});