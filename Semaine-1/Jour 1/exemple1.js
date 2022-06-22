// Correction exercice greater lower
let plays = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

if (randomNumber > 100) randomNumber = 100;
if (randomNumber < 1) randomNumber = 1;

console.log(randomNumber);

console.log("Pour commencer à jouer saississez un nmbre entre 1 et 100");

process.stdin.on("data", (input) => {
  input = +input.toString().trim();
  plays++;
  if (input < 1 || input > 100)
    console.log("Vous devez entrer un nombre entre 1 et 100");
  if (isNaN(input)) console.log("Ceci n'est pas un nombre");

  if (input < randomNumber) {
    console.log(`Le nombre à trouver est plus grand que ${input}`);
  } else if (input > randomNumber) {
    console.log(`Le nombre à trouver est plus petit que ${input}`);
  } else {
    console.log(
      `Vous avez trouvez en ${plays} coups, c'était bien le nombre ${input}`
    );
    process.exit();
  }
  if (plays >= 10) {
    process.stdout.write(`Vous avez dépassé les ${10} tentatives`);
    process.exit();
  }
});