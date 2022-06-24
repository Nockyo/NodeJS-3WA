// définitions de plusieurs constantes à la fois
const fs = require('fs'),
  http = require('http'),
  url = require('url'),
  path = require('path');

http.createServer(function (req, res) {
  console.log(`${req.method} ${req.url}`);

  // découpe l'URL
  const parsedUrl = url.parse(req.url);

  console.log(parsedUrl)
  // Extrait le chemin de l'URL
  let pathname = `.${parsedUrl.pathname}`;

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

    // si le fichier est trouvé, définit le content-type et envoie les données
    res.setHeader('Content-type', 'application/json');
    res.end(data);
  });
}).listen(8080);