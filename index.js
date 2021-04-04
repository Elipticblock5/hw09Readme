// TODO: Include packages needed for this application
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "github",
        message: "Please enter your Github username?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return.fs.writeFile(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
