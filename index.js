// Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");

// Access to classes

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Empty Array for Team Info

const teamMembersData = [];

// Array of questions for user input

console.log("Hello, please insert the information as you are prompted.");

// Menu of questions that has user select role to initiate the correct query

const queryMenu = () => {
  inquirer
    .prompt([
      {
        name: "role",
        message: "Please select your role.",
        type: "list",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Engineer") {
        addEngineer();
      } else if (answers.role === "Intern") {
        addIntern();
      } else if (answers.role === "Manager") {
        addManager();
      }
    });
};

// Function called above to add an engineer to teamMembersData array and loop back to queryMenu if user wants to add another member

function addEngineer() {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "Please insert your name.",
        type: "input",
      },
      {
        name: "id",
        message: "Please insert your ID.",
        type: "input",
      },
      {
        name: "email",
        message: "Please insert your email.",
        type: "input",
      },
      {
        name: "github",
        message: "Please insert your GitHub.",
        type: "input",
      },
      {
        name: "newmember",
        message: "Would you like to add another member?",
        type: "confirm",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github,
      );
      teamMembersData.push(engineer);
      if (answers.newmember) {
        return queryMenu();
      } else return buildTeam();
    });
}

// Function called above to add an intern to teamMembersData array and loop back to queryMenu if user wants to add another member


function addIntern() {
  return inquirer.prompt([
    {
      name: "name",
      message: "Please insert your name.",
      type: "input",
    },
    {
      name: "id",
      message: "Please insert your ID.",
      type: "input",
    },
    {
      name: "email",
      message: "Please insert your email.",
      type: "input",
    },
    {
      name: "school",
      message: "Please insert the name of your school.",
      type: "input",
    },
    {
      name: "newmember",
      message: "Would you like to add another member?",
      type: "confirm",
    },
  ])    .then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school,
    );
    teamMembersData.push(intern);
    if (answers.newmember) {
      return queryMenu();
    } else return buildTeam();
  });;
}

// Function called above to add a manager to teamMembersData array and loop back to queryMenu if user wants to add another member


function addManager() {
  return inquirer.prompt([
    {
      name: "name",
      message: "Please insert your name.",
      type: "input",
    },
    {
      name: "id",
      message: "Please insert your ID.",
      type: "input",
    },
    {
      name: "email",
      message: "Please insert your email.",
      type: "input",
    },
    {
      name: "officenumber",
      message: "Please insert your office number.",
      type: "input",
    },
    {
      name: "newmember",
      message: "Would you like to add another member?",
      type: "confirm",
    },
  ])    .then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officenumber,
    );
    teamMembersData.push(manager);
    if (answers.newmember) {
      return queryMenu();
    } else return buildTeam();
  });
}

// Function that writes the file based on the info logged in the teamMembersData array and inputs it into the template from generateHTML.js

function buildTeam() {
  inquirer.prompt([
    {
    name: 'filename',
    message: 'What would you like to name your file?',
    type: 'input',
    },
  ])
  .then((data) => {
    const fileName = `./dist/${data.filename}.html`
    fs.writeFile(fileName, generateHTML(teamMembersData), (err) =>
    err? console.log(err) : console.log("Your team page has been stored successfully!"))
  });
}

// Calling the main function that accesses the others

queryMenu();
