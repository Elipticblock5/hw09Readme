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
[

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {}
        {
            type: 'input',
            name: 'name',
            message: 'Please provide a project name. This is REQUIRED!',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must provide a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your application. This is REQUIRED!',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('You must enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please provide a link to your deployed application.  This is REQUIRED',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You must enter a link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm', 
            name: 'confirmInstall',
            message: 'Do you choose to enter an Installation section?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide information for using the application.  This is REQUIRED',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please include your usage information!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmScreenshot',
            message: 'Include screenshots in your Usage section? (If yes, you will be prompted for more info later.)',
            default: true
        },
        { 
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to include a License section?',
            default: true
        }, 
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide license information.',
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to include a Contributions section?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter the application guidelines for contributing.',
            when: ({ confirmContributing }) => {
                if (confirmContributing) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to include a Tests section?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter informatoin for testing for your application.',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmQuestions',
            message: 'Do you have any questions you would like to ask?',
            default: true
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please submit your questions.',
            when: ({ confirmQuestions }) => {
                if (confirmQuestions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
   
    ];

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
