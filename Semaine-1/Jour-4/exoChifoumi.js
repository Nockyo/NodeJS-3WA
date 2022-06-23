/*
 * Utilisez readline.
 * Mettez en place les variables ROCK, PAPER et SCISSOR dans le .env
 * Faites en sorte de faire une partie en 3 points gagnants contre un "bot"
 * Le gagnant est déclaré lorsque un des deux joueurs (soit vous soit le bot donc) atteint 3 donc points
 * N'hésitez pas à mettre de la couleur dans la console avec chalk (attention il vous faudra installer spécifiquement la version 4.1.2)
 * Faites en sorte de pouvoir relancer la partie lorsqu'un gagnant a été déclaré
 */

const readline = require("readline");
const os = require("os");
const chalk = require("chalk")

require("dotenv").config();
const { APP_R, APP_P, APP_S, APP_CLRS } = process.env;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let player = {
    choice : [],
    score : 0
};

let robot = {
    choice : [],
    score : 0
}

const { username } = os.userInfo();

chifoumi(2)

function chifoumi(victoire = 3)
{
    if(player.score == victoire || robot.score == victoire)
    {
        if(player.score > robot.score)
        {
            console.log(chalk.yellow.underline.bold("Vous avez gagné la partie ! Félicitations ! :D"))
        }
        else if (player.score < robot.score)
        {
            console.log(chalk.black.bgWhite("Vous avez perdu. Contre un bot. C'est grave là."))
        }
        else
        {
            console.log(chalk.gray("Bon bah personne n'a gagné. Pas de chance. On réessaie ?"))
        }
        let history = ""
        for (let i = 0; i < player.choice.length; i++)
        {
            let manche = i + 1;
            history += chalk.yellow('Manche ' + manche) + ' : ' + chalk.cyan('player chose ' + player.choice[i]) +
                " - " + chalk.magenta("robot chose " + robot.choice[i]) + "\n"
        }

        console.log(chalk.bgWhite.black(history))

        player.score = 0;
        player.choice = [];
        robot.score = 0;
        robot.choice = [];
        process.exit(0)
    }
    else
    {
        let scoreString = ''
        if(player.choice.length > 0)
        {
            scoreString = "Votre score : " + player.score + ", score du robot : " + robot.score + '\n';
        }
        rl.question(`Choisissez ${APP_R}, ${APP_P} ou ${APP_S} \n` + scoreString , (answer) => {

            let robotChoice = Math.floor(Math.random() * 3);

            switch (robotChoice)
            {
                case 0:
                    robotChoice = APP_R
                    break;

                case 1:
                    robotChoice = APP_P
                    break;

                case 2:
                    robotChoice = APP_S
                    break;
            }


            answer = answer.trim().toUpperCase()

            switch(answer)
            {
                case APP_R:
                    if (robotChoice == answer)
                    {
                        console.log("Égalité. Réessaie ! ")
                    }
                    else if(robotChoice == APP_P)
                    {
                        console.log("Le robot à choisi " + chalk.magenta(APP_P) + ", votre " + chalk.blue(APP_R) + " à perdu !")
                        robot.score += 1;
                    }
                    else
                    {
                        console.log("Le robot à choisi " + chalk.magenta(APP_S) + ", votre " + chalk.blue(APP_R) + " à gagné !")
                        player.score += 1;
                    }

                    player.choice.push(answer);
                    robot.choice.push(robotChoice);

                    break;

                case APP_P:
                    if (robotChoice == answer)
                    {
                        console.log("Égalité. Réessaie ! ")
                    }
                    else if(robotChoice == APP_S)
                    {
                        console.log("Le robot à choisi " + chalk.magenta(APP_S) + ", votre " + chalk.blue(APP_P) + " à perdu !")
                        robot.score += 1;
                    }
                    else
                    {
                        console.log("Le robot à choisi " + chalk.magenta(APP_R) + ", votre " + chalk.blue(APP_P) + " à gagné !")
                        player.score += 1;
                    }

                    player.choice.push(answer);
                    robot.choice.push(robotChoice);

                    break;

                case APP_S:
                    if (robotChoice == answer)
                    {
                        console.log("Égalité. Réessaie ! ")
                    }
                    else if(robotChoice == APP_P)
                    {
                        console.log("Le robot à choisi " + chalk.magenta(APP_R) + ", votre " + chalk.blue(APP_S) + " à perdu !")
                        robot.score += 1;
                    }
                    else
                    {
                        console.log("Le robot à choisi " + chalk.magenta(APP_P) + ", votre " + chalk.blue(APP_S) + " à gagné !")
                        player.score += 1;
                    }

                    player.choice.push(answer);
                    robot.choice.push(robotChoice);

                    break;

                case APP_CLRS:
                    console.log(chalk.bgRed("CLARISSE LA CONNASSE est trop nulle. Vous perdez instantanément la partie."))
                    player.choice.push(answer);


                case "EXIT":
                    console.log(chalk.bgRed("Oh le looser !"));
                    process.exit(0);

                default:
                    console.log(chalk.red(`/!\\ Vous devez entrer ${APP_R}, ${APP_P} ou ${APP_S}. Retour au menu. /!\\ `))
            }
            chifoumi(victoire)
        });
    }
}
