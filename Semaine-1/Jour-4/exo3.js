const fs = require('fs'),
    http = require('http');

const shuffleUsers = require("./src/utils");

const port = 8080;
const users = ["Alan", "Sophie", "Sonia", "Clarisse"];

const server = http.createServer((req, res) => {


    let data;

    try{
        data = fs.readFileSync(__dirname + "/students.json", 'utf8');
        res.writeHead(200);
        // res.end()
    }
    catch(err){
        if(err) throw err;

        res.status(404).send('notFound');
        // res.end(JSON.stringify(err));
        return;
    }

    let { url } = req;

    url = url.replace("/", "");
    //
    // if (url === "favicon.ico") {
    //     res.writeHead(200, {
    //         "Content-Type": "image/x-icon",
    //     });
    //     res.end();
    //     return;
    // }
    //
    if (url === "all") {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(data)
        res.end()
    }

    // if (url === "shuffle") {
    //     let randomizedUserList = shuffleUsers(users);
    //     res.end(`<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    // </head>
    // <body>
    //
    // ${randomizedUserList}
    //
    //     <a href="/">back</a>
    //
    // </body>
    // </html>`);
    // }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});