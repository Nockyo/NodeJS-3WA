const students = [
    { name : "Sonia"},
    { name : "Antoine"}
];

// définitions de plusieurs constantes à la fois
const fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

http.createServer(function (req, res) {
    console.log(`${req.method} ${req.url}`);

    // découpe l'URL
    const parsedUrl = url.parse(req.url);

    // Extrait le chemin de l'URL
    let pathname = `.${parsedUrl.pathname}`;

    // Associe le type MIME par rapport au suffixe du fichier demandé
    const mimeType = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword',
        '.eot': 'appliaction/vnd.ms-fontobject',
        '.ttf': 'application/font-sfnt'
    };

    // __dirname donne le chemin absolu pour trouver le fichier
    // ici la politique des urls indiquera le chemin à suivre pour récupérer le fichier
    fs.readFile(pathname,  (err,data) => {

        // on gère les erreurs et surtout on retourne une page 404 si il y a un problème
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            // Il ne faut oublier de sortir de la fonction pour ne pas exécuter la suite du script
            return;
        }
        // extraction du suffixe de fichier selon le chemin basé sur l'URL fournie. ex. .js, .doc, ...
        const ext = path.parse(pathname).ext;
        // si le fichier est trouvé, définit le content-type et envoie les données
        res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
        res.end(data);
    });

    if (req.method === 'POST') {
        // Handle post info...
        let body = '';
        req.on('data', data => {
            body += data;
        });
    
        // On écoute maintenant la fin de l'envoi des données avec la méthode on et l'attribut end
        req.on('end', () => {
            let array = body.split('=');
            let bodyZdaah = array[1].split('+').join(' ');
            if(bodyZdaah) students.push({name : bodyZdaah});
        });
    };

    if (req.url === "/bootstrap") {
        res.writeHead(200, { "Content-Type": "text/css" });
        const css = fs.readFileSync("./assets/css/bootstrap.min.css"); // on envoit le fichier au client
        res.write(css);
        res.end();
    
        return;
    };

    if (req.url === "/users") {
        res.writeHead(200, { 
            'Content-Type' : 'text/html' 
        });
        let users = '<ul>';

        for (const {name} of students) {
            users += `<li>${name}</li>`
        };
        users += '</ul>';
        res.end(`<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Ajoutez un utilisateur</title>
                <link href="/bootstrap" rel="stylesheet" type="text/css" />
            </head>
            <body>
                ${users}
                <a href="/">back to home</a>
            </body>
        </html>`);
    };

    if(req.url === "/"){
        const home = fs.readFileSync("./views/home.html");
        res.writeHead(200, {
            "Content-type" : "text/html"
        });
        res.end(home)
    };
}).listen(8080);