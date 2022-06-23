const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
    const { url } = req;

    if(url === "/favicon.ico") {
        res.writeHead(200, {
            "Content-Type": "image/x-icon",
        });
        res.end();
        return
    }

    res.writeHead(200, {
        "Content-Type": "text/plain",
    });
    res.write("Hello world");
    res.end();
});

server.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
});