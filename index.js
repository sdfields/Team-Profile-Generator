// Packages needed for this application

const inquirer = require(`inquirer`);
const fs = require(`fs`);

// Access to classes

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Empty Array for Team

const teamMembersData = [];

// Array of questions for user input

const memberInfoQuery = [
    {
        name: `name`,
        message: `Please insert your name.`,
        type: `input`,
    },
    {
        name: `id`,
        message: `Please insert your ID.`,
        type: `input`,
    },
    {
        name: `email`,
        message: `Please insert your email.`,
        type: `input`,
    },
    {
        name: `role`,
        message: `Please select your role.`,
        type: `list`,
        choices: [`Engineer`, `Intern`, `Manager`]
    },
    {
        name: `school`,
        message: `Please insert the name of your school.`,
        type: `input`,
    },
    {
        name: `officeNumber`,
        message: `Please insert your office number.`,
        type: `input`,
    },
];

    // If Engineer is selected ask for GitHub
        if(answers.role === Engineer) {
            const managerQ = await inquirer
            .prompt([
                {
                    name: `gitHub`,
                    message: `Please insert your GitHub.`,
                    type: `input`,
                },
            ])
        }

    // If Intern is selected ask for school


    // If Manager is selected ask for Office Number




// function generateHTML(answers)
    
// }

// Function to initialize app
function init() {
    inquirer
    .prompt(memberInfoQuery)
    .then((answers) =>
      fs.writeFile(`myteam.html`, generateHTML(answers), (error) => {
           return error 
          ? console.error(error)
          : console.log(`Team Profile uploaded successfully!`)
      })
    );
};

// Call
init();