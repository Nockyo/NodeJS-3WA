const pug = require("pug");

//Exo 1
// pug.renderFile("template.pug", {user: { isAdmin: true }}, (err, data) => {
//     if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end(err.message);
//     }
//     console.log(data)
// });


//Exo 2
// const compileTemplate = pug.compileFile("template.pug");

// console.log(compileTemplate({user: { isAdmin: true }}));

//Exo 3
const loggedUser = {
    name: {
        first: "Jean",
        last: "Dupont",
    },
    age: 36,
    birthdate: new Date("1986-04-18"),
    location: {
        zipcode: "77420",
        city: "Champs-sur-Marne",
    },
    isAdmin: true,
};

const compileTemplate = pug.compileFile("template.pug", { pretty: true });

console.log(compileTemplate({user: loggedUser }));