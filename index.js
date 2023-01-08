// Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input

const subjectInfo = [
    {
        name: "Role",
        message: "Please insert your role.",
        type: "input",
    },
    {
        name: "Name",
        message: "Please insert your name.",
        type: "input",
    },
    {
        name: "ID",
        message: "Please insert your ID.",
        type: "input",
    },
    {
        name: "Email",
        message: "Please insert your email.",
        type: "input",
    },
    {
        name: "Office Number",
        message: "Please insert your office number.",
        type: "input",
    },
    {
        name: "GitHub",
        message: "Please insert your GitHub.",
        type: "input",
    },
    {
        name: "School",
        message: "Please insert the name of your school.",
        type: "input",
    },
];

// function generateHTML(answers) {
    
// }

// Function to initialize app
function init() {
    inquirer
    .prompt(subjectInfo)
    .then((answers) =>
      fs.writeFile('index.html', generateHTML(answers), (error) => {
           return error 
          ? console.error(error)
          : console.log('Team Profile uploaded successfully!')
      })
    );
}

// Function call to initialize app
init();