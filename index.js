// Packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
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

function init() {
const questions = [
  {
    name: 'name',
    message: 'Please insert your name.',
    type: 'input',
  },
  {
    name: 'id',
    message: 'Please insert your ID.',
    type: 'input',
  },
  {
    name: 'email',
    message: 'Please insert your email.',
    type: 'input',
  },
  {
    name: 'role',
    message: 'Please select your role.',
    type: 'list',
    choices: ['Engineer', 'Intern', 'Manager'],
  },
  // If Engineer is selected ask for GitHub profile.
  {
    name: 'gitHub',
    message: 'Please insert your GitHub.',
    type: 'input',
    when: (answers) => {
      if (answers.role === 'Engineer') {
        return true;
      }
    },
  },
  // If Intern is selected ask for school.
  {
    name: 'school',
    message: 'Please insert the name of your school.',
    type: 'input',
    when: (answers) => {
      if (answers.role === 'Intern') {
        return true;
      }
    },
  },
  // If Manager is selected ask for Office Number
  {
    name: 'officeNumber',
    message: 'Please insert your office number.',
    type: 'input',
    when: (answers) => {
      if (answers.role === 'Manager') {
        return true;
      }
    },
  },
  {
    name: 'newMember',
    message: 'Would you like to add another member?',
    type: 'confirm',
  },
];
};
// Question Loop that allows them to add more members

function getAnswers() {
  return inquirer.prompt(questions).then((answers) => {
    if (answers.newMember) {
      return getAnswers();
    } else {
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
  });
};

getAnswers();

// function createTeamCards() {
//   inquirer.prompt(questions).then((answers) =>
//     fs.writeFile("myteam.html", generateHTML(answers), (error) => {
//       return error
//         ? console.error(error)
//         : console.log("Your team page has been stored successfully!");
//     })
//   );
// }

// createTeamCards();
