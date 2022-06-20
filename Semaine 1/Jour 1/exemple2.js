const fs = require('fs');

const {writeFile, readFile} = fs;

// readFile return un callback
readFile('./titanic.txt', 'utf8', (err, data) => {
    if(err) {
        process.stdout.write(err);
        process.exit(0);
    }

    console.log(data);
});


// readFileSync return un buffer
// fs.readFileSync('./titanic.txt', 'utf8', (err, data) => {
//     if(err) {
//         process.stdout.write(err);
//         process.exit(0);
//     }

//     console.log(data);
// });

// try {
//     const data = fs.readFileSync('./titanic.txt', 'utf8');
//     console.log("SYNC" , data);
// } catch (error) {
//     console.log(error)
// }

const text = "Hello from exemple";

//Si le fichier existe il est remplacé, et si il n'existe pas il est créé.
writeFile('monsuperfichier.txt', text, (err) => {
    if(err) throw err;
    console.log("file updated");
})

//Besoin absolument de data, le faire en synchrone, pas besoin immédiatement, faire en asynchrone