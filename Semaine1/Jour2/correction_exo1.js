const { readFile, readFileSync, writeFile, appendFile } = require("fs");

/*
1. Lisez le fichier à l'aide de la méthode asynchrone.
*/

// readFile("./students.txt", "utf-8", (err, data) => {
//   if (err) {
//     process.stdout.write(err.message);
//     process.exit(0);
//   }

//   const lines = data.split(/\r?\n/);

//   console.log(lines);
// });

/*

1.(bis) Pour la suite utilisez l'approche synchrone afin de récupérer les données **dans un tableau** que vous pourrez exploiter par la suite dans le script.

*/

let lines;

try {
  lines = readFileSync("./students.txt", "utf8").split(/\r?\n/);
} catch (error) {
  process.stdout.write(error.message);
}

// console.log(lines);

/*

2. Recherchez dans le tableau tous les étudiants qui ont eu plus de 17 de moyenne strictement.

*/

const studentHavingGreaterThanSeventeen = [];

for (line of lines) {
  for (cell of line.split(" ")) {
    // console.log("cell", cell);
    if (cell > 17) {
      studentHavingGreaterThanSeventeen.push(line);
    }
  }
}

// console.table(studentHavingGreaterThanSeventeen);

/*

3. Recherchez dans le tableau l'étudiant qui a eu la meilleur node.

*/
let bestNote = 0;
let bestStudent;

for (line of lines) {
  for (cell of line.split(" ")) {
    if (+cell > bestNote) {
      bestNote = parseInt(cell);
      // console.log(bestNote);
      // bestStudent = line;
    }
  }
}

// console.log(bestNote);
/*

4. Récupérez les données dans un objet student, puis ajoutez chaque étudiant dans un tableau students.

`
{ name : null, note : null, address : null}; // structure de l'objet
const students = []; // tableau pour récupérer les données.
`

*/

const students = [];

for (line of lines) {
  const [note, name, address] = line.split(" ");

  if (isNaN(note)) continue;
  students.push({ name, note, address });
}

// console.log(students);

/*

5. Ordonnez maintenant l'ensemble des données dans le tableau.

*/

students.sort((a, b) => a.note - b.note);

// console.log(students);

/*

## Exercices supplémentaires

Attention, il faut bien réfléchir avant d'écire le code de cet exercice, certaines méthodes étant asynchrones, il faudra penser à l'enchaînement de vos traitements.

6. Ajoutez dans le fichier students.txt les étudiants suivants :

- 18 Sonia Paris

- 17 Clarisse Marseille

*/

let newStudents = ["18 Sonia Paris", "17 Clarisse Marseille"];

for (let student of newStudents) {
  student = "\n" + student;
  appendFile("./students.txt", student, (err) => {
    if (err) throw err;

    readFile("./students.txt", "utf8", (err, data) => {
      if (err) throw err;

      const lines = data.split(/\r?\n/).filter((x) => x != "");
      let str = "";
      for (const i in lines) {
        const [note, name, address] = lines[i].split(" ");
        if (isNaN(note)) {
          str += `${note} ${name} ${address}\n`;
          continue;
        }
        str += `${note} ${name.toUpperCase()} ${address}\n`;
      }

      writeFile("./students.txt", str, console.error);
    });
  });
}

/*

7. Lire le fichier lui-même et mettez chaque nom en majuscule
 */