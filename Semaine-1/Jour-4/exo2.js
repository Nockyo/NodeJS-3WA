const http = require("http");

const port = 8080;

const users = ["Alan", "Sophie", "Sonia", "Clarisse"];

const { shuffle } = require('./src/utils.js')

const server = http.createServer((req, res) => {
    const { url } = req;

    if(url === "/favicon.ico") {
        res.writeHead(200, {
            "Content-Type": "image/x-icon",
        });
        res.end();
        return
    }
    else if(url === "/"    )
    {
        res.writeHead(200, {
            "Content-Type": "text/plain",
        });
        let stringUser = ''
        users.map(user => stringUser += user + '\n')
        res.write(stringUser);
        res.end();
    }
    else if(url === "/shuffle")
    {
        res.writeHead(200, {
            "Content-Type": "text/plain",
        });
        let shuffledArray = shuffle(users)
        let stringUser = ''
        shuffledArray.map(user => stringUser += user + '\n')

        res.write(stringUser);
        res.end();
    }

    else if (url === "/close") {
        console.log("Exiting NodeJS server");
        process.exit();
    }



});

server.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
});