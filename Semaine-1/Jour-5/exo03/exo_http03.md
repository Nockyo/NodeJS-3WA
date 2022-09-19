Reprenez le projet précédent vous allez créer une mini api qui retournera les données au format JSON.

implémentez les routes suivantes :

- all (retourne le fichier en entier)
- /search/[userName] (retourne seulement l'utilisateur dont le nom se situe dans l'url)

Mais cette fois-ci, nous allons faire appel à la méthode des fichiers statiques pour ne charger sur le fichier correspondant.

Gérez également les erreurs, si un user n'existe pas, retournez une 404
