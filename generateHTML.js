// Creates an engineer card with basic HTML and info from teamMembersData array

function engineerCard(engineer) {
  return `
<div class="row">
    <div class="column">
        <div class="card">
            <h1 class="card-header">${engineer.name} <br> Engineer</h1>
            <ul>
                <li>ID: ${engineer.id}</li>
                <li>Email: <a href="mailto:${engineer.email}" target="_blank"> ${engineer.email}</a></li>
                <li>GitHub: <a href="https://www.github.com/${engineer.github}" target="_blank"> ${engineer.github}</a></li>
            </ul>
        </div>
    </div>
</div> 
`;
}

// Creates an intern card with basic HTML and info from teamMembersData array

function internCard(intern) {
  return `
  <div class="row">
      <div class="column">
          <div class="card">
              <h1 class="card-header">${intern.name} <br> Intern</h1>
              <ul>
                  <li>ID: ${intern.id}</li>
                  <li>Email: <a href="mailto:${intern.email}" target="_blank"> ${intern.email}</a></li>
                  <li>School: ${intern.school}</li>
              </ul>
          </div>
      </div>
  </div> `;
}

// Creates a manager card with basic HTML and info from teamMembersData array

function managerCard(manager) {
  return `
      <div class="row">
          <div class="column">
              <div class="card">
                  <h1 class="card-header">${manager.name} <br> Manager</h1>
                  <ul>
                      <li>ID: ${manager.id}</li>
                      <li>Email: <a href="mailto:${manager.email}" target="_blank"> ${manager.email}</a></li>
                      <li>Office Number: ${manager.officenumber}</li>
                  </ul>
              </div>
          </div>
      </div> `;
}

// Renders the cards

const generateHTML = (data) => {
  let teamArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];

    const role = employee.getRole();

    if (role === "Engineer") {
      const renderEngineer = engineerCard(employee);
      teamArray.push(renderEngineer);
    }
    if (role === "Intern") {
      const renderIntern = internCard(employee);
      teamArray.push(renderIntern);
    }
    if (role === "Manager") {
      const renderManager = managerCard(employee);
      teamArray.push(renderManager);
    }
  }

  const allCards = teamArray.join("");
  const renderedPage = skeletonHTML(allCards);

  return renderedPage;
};

// Basic HTML body to use as a template

function skeletonHTML(allCards) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles.css"/>
        <title>My Team</title>
    </head>
        <body>
          <header>My Team</header>
            ${allCards}
        </body>
    </html>`;
}

module.exports = generateHTML;
