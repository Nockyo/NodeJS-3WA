// import

const fs = require("fs");
const readline = require("readline");
const { readFileSync } = fs;
const os = require("os");

const { username } = os.userInfo();

// données

const data = JSON.parse(readFileSync("./students.json", "utf-8"));

const { students } = data;

// console.log(data);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt(`@${username}>`);
rl.prompt();

rl.on("line", (line) => {
  line = line.trim().toString();

  if (isNaN(line) === false) {
    console.log("Vous devez entrer une chaîne de caractère");
    rl.prompt();
    return;
  }

  if (line === "stop") {
    console.log("Au revoir!\n");
    process.exit(0);
  }

  for (const student of students) {
    /*
     {
        name: 'Bernard',
        notes: [ 9, 8, 19, 11 ],
        address: 'Paris',
        mention: null
     }
     */

    const { name, notes } = student;
    if (name.toLowerCase() === line.toLowerCase()) {
      const sum = notes.reduce((acc, current) => acc + current);
      const average = Math.floor((sum / notes.length) * 100) / 100;

      console.log(`${name} a obtenu une moyenne de ${average}`);
      rl.prompt();
      return;
    }
  }

  console.log("Désolé cette personne n'est pas présente dans la liste");
  rl.prompt();
}).on("close", () => {
  console.log("\nPassez une bonne journée");
});