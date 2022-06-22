/*
1. Vous allez lire un fichier puis calculer la moyenne de chaque étudiant. Affichez le nom de l'étudiant, puis donner sa moyenne. Récupérez les données dans le fichier **students.json**.

2. Pensez à gérer le cas où l'on souhaite arrêter le processus. Ainsi que le fait que la recherche doit être insensible à la casse.

3. Gérez les exceptions/erreurs de saisies.
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let {readFile} = require('fs')
const utils = require('./utils.js');

readFile('./students.json', 'utf-8', (err, data) => {
    if(err)
    {
        console.log(err.message)
    }

    let students = JSON.parse(data);

    rl.setPrompt("#> ");
    rl.prompt();

    rl.on("line", (line) => {

        let name = line.trim().toLowerCase()
        let nameWithUppercase = name.charAt(0).toUpperCase() + line.trim().substring(1);
        let filteredArray = students.students.filter(student => student.name.toLowerCase() == name);

        if(filteredArray.length >= 1)
        {
            console.log(nameWithUppercase + ' est bien enregistré.' + ' Sa moyenne est : '
                + utils.calcMoy(filteredArray[0].notes) + ".\nEntrez 'exit' pour quitter.")
        }
        else
        {
            if (name == "clarisse la connasse")
            {
                console.log("Sa moyenne ? 0. Elle est nulle. Je la déteste. Lui parlez pas. Si vous la croisez, fuyez." +
                    " Vous ne méritez même pas de continuer la recherche après avoir mentionné son nom.")
                process.exit(0)
            }

            console.log("Nous n'avons pas trouvé " + nameWithUppercase +
                " dans nos données, veuillez entre un autre nom. \nEntrez 'exit' pour quitter.")
        }

        if (name == "exit")
        {
            process.exit(0)
        }

    })

})