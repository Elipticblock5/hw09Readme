// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "email",
        message: "Please enter your email address?"
    },

    {
        type: "input",
        name: "github",
        message: "Please enter your Github username?"
    },

    {
        type: "input",
        name: "Project_Title",
        message: "Please enter your project's name"
    },

    {
        type: "list",
        message: "What license is the project currently under?",
        name: "license",
        choices: [
            "Unlicensed",
            "Mozilla Public License 2.0",
            "MIT",
            "GNU",
        ]
    },

    {
        type: "input",
        message: "What information would you like to add about contributing?",
        name: "contributions"
    },

    {
        type: "input",
        message: "Any special instructions on using repository?",
        name: "usage",
    },

    {
        type: "input",
        message: "Can you shortly describe your project?",
        name: "description",
    },

    {
        type: "input",
        message: "what command is used to run tests?",
        name: "tests",
        default: "npm run test",
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((questionAnswers) => {
        console.log("Making your readme...hold on a second...");
        writeToFile("README.md", generateMarkdown({...questionAnswers}));
    })
}

// Function call to initialize app
init(); 
