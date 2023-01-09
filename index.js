// Packages needed for this application

const inquirer = require(`inquirer`);
const fs = require(`fs`);

// Access to classes

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Empty Array for Team

const teamMembers = [];

// Array of questions for user input

const teamInfo = [
    {
        name: `Name`,
        message: `Please insert your name.`,
        type: `input`,
    },
    {
        name: `ID`,
        message: `Please insert your ID.`,
        type: `input`,
    },
    {
        name: `Email`,
        message: `Please insert your email.`,
        type: `input`,
    },
    {
        name: `Role`,
        message: `Please select your role.`,
        type: `checkbox`,
        choices: [`Engineer`, `Intern`, `Manager`]
    },
    {
        name: `GitHub`,
        message: `Please insert your GitHub.`,
        type: `input`,
    },
    {
        name: `School`,
        message: `Please insert the name of your school.`,
        type: `input`,
    },
    {
        name: `Office Number`,
        message: `Please insert your office number.`,
        type: `input`,
    },
];







// function generateHTML(answers) {
    
// }

// Function to initialize app
// function init() {
//     inquirer
//     .prompt(subjectInfo)
//     .then((answers) =>
//       fs.writeFile(`myteam.html`, generateHTML(answers), (error) => {
//            return error 
//           ? console.error(error)
//           : console.log(`Team Profile uploaded successfully!`)
//       })
//     );
// }

// Function call to initialize app
// init();