// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

//debugging, trying promisify
//reference here https://nodejs.org/dist/latest-v8.x/docs/api/util.html
const util = require("util");
const fileWriteAsync = util.promisify(fs.writeFile);

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
const writeToFile = (filename, data) => {
    return fileWriteAsync(filename, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((questionAnswers) => {
        console.log("Creating your README file...this will take a moment, your patience will be rewarded");
        writeToFile("README.md", generateMarkdown({...questionAnswers}));
    })
}

// Function call to initialize app
init(); 
