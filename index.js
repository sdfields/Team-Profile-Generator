// Packages needed for this application

const inquirer = require(`inquirer`);
const fs = require(`fs`);

// Array of questions for user input

const subjectInfo = [
    {
        name: `Role`,
        message: `Please select your role.`,
        type: `checkbox`,
        choices: [`Engineer`, `Intern`, `Manager`]
    },
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
        name: `Office Number`,
        message: `Please insert your office number.`,
        type: `input`,
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
];

// function generateHTML(answers) {
    
// }

// Should I write an HTML file and have the contents transcribed from index.html to myteam.html and append the users info?

// Function to initialize app
function init() {
    inquirer
    .prompt(subjectInfo)
    .then((answers) =>
      fs.writeFile(`myteam.html`, generateHTML(answers), (error) => {
           return error 
          ? console.error(error)
          : console.log(`Team Profile uploaded successfully!`)
      })
    );
}

// Function call to initialize app
init();