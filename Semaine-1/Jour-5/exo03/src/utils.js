function shuffleUsers(users) {
  // on va générer du html
  let html = "<ul>";

  users.sort((a, b) => Math.random() - 0.5);

  for (const user of users) {
    html += `<li>${user}</>`;
  }

  html += "</ul>";

  return html;
}

module.exports = shuffleUsers;
