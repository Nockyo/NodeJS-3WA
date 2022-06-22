// Vous devez permettre de proposer un nom dans le terminal. Dès que l'input correspond à un nom de la liste, vous arrêtez le process
// (recherche insensible à la case et aux espaces) ;)

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const students = ["Alan", "Sonia", "Sophie"];


// rl.question("How old are you?\n", (answer) => {
//   console.log(`Tu as ${answer} an(s)`);
//   rl.close();
// });

// rl.on("line", (data) => {
//   console.log("log", data);
// });

rl.setPrompt("#> ");
rl.prompt();

rl.on("line", (line) => {

    const RegExp = /^[a-zA-Z]$/
    let finalLine = line.trim().toLowerCase().charAt(0).toUpperCase() + line.trim().substring(1)
    if(students.includes(finalLine))
    {
        console.log(finalLine + ' est bien enregistré. Au revoir.')
        process.exit()
    }
    console.log("Nous n'avons pas trouvé " + finalLine + " dans nos données, veuillez entre un autre nom")
})