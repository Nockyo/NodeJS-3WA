const pug = require("pug");

const menuItems = [
    { path: "/", title: "Home", isActive: true },
    { path: "/about-me", title: "About", isActive: false },
    { path: "/references", title: "References", isActive: false },
    { path: "/contact-me", title: "Contact", isActive: false },
  ];

const user = {
    name: {
        first: "Jean",
        last: "Dupont",
    },
}

const compileTemplate = pug.compileFile("frontend-layout.pug", { pretty: true });

console.log(compileTemplate({menuItems: menuItems, user : user}));