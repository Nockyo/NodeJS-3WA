const fs = require("fs");
const readline = require("readline");
const { readFileSync } = fs;
const os = require("os");

require("dotenv").config();

const { APP_AB, APP_TB, APP_B, APP_P, APP_NR } = process.env;

const { username } = os.userInfo();

const data = JSON.parse(readFileSync("./students.json", "utf-8"));

const { students } = data;

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
    const { name, notes } = student;
    if (name.toLowerCase() === line.toLowerCase()) {
      const sum = notes.reduce((acc, current) => acc + current);
      const average = Math.floor((sum / notes.length) * 100) / 100;

      if (average < 10) {
        student.mention = APP_NR;
      } else if (average < 12) {
        student.mention = APP_P;
      } else if (average < 14) {
        student.mention = APP_AB;
      } else if (average < 16) {
        student.mention = APP_B;
      } else {
        student.mention = APP_TB;
      }

      const { mention } = student;

      console.log(
        `${name} a obtenu une moyenne de ${average}. Ce qui lui confère une mention ${mention}`
      );
      rl.prompt();
      return;
    }
  }

  console.log("Désolé cette personne n'est pas présente dans la liste");
  rl.prompt();
}).on("close", () => {
  console.log("\nPassez une bonne journée");
});