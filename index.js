/*
//node modules needed ....
const fs = require('fs');
const inquirer = require('inquirer');
//prompts to inquirer for questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the title of your projct!",
            name: 'title',
            //validate function
            validate: (value)=>{ if(value){return true} else {return 'value needed to proceed'}},
        },
        {
            type: 'input',
            message: 'How does installtion work for your app',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'value needed to proceed'}},
        },
        {
            type: 'input',
            message: 'Instructions to be followed?',
            name: 'instructions',
            validate: (value)=>{ if(value){return true} else {return 'value needed to proceed'}},
        },
        {
            type: 'input',
            message: 'any credits to give',
            name: 'credits',
            validate: (value)=>{ if(value){return true} else {return 'value needed to proceed'}},
         },
        
         {
            type: 'input',
            message: 'How to use the application?',
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'value needed to proceed'}},
        },
        {
            //change to list type for license types. 
            type: 'list',
            message: 'How is the app licensed',
            name: 'license',
            choices:['The MIT License', 'The Gnu Public License', 'Apache License', 'The GPL License', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'value needed to proceed'}},
        },
        {
            type: 'input',
            message: 'GitHub Username?',
            name: 'github',
            validate: (value)=>{ if(value){return true} else {return 'value needed to proceed'}},
        },
        {
            type:'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (value)=>{ if(value){return true} else {return 'value needed to proceed'}},
        }
    ]
).then(({
    title,
    installation,
    instructions,
    credits,
    usage,
    license,
    github,
    email,
})=>{
//README template construction
const template = # ${title}
* [Installation]{#installation}
* [Usage]{#usage}
* [contribution]{#contribution}
* [credits]{#credits}
* [LIcense]{#license}
# Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
### Instructions
${instructions}
## Credits
${credits}
## License
${license}
#Contact
* GitHub :${github}
* Email :${email};
// new functeion to create readme
createNewFile(title,template);
}
);
//not working
function createNewFile(filename,template){
    fs.writeFile(''./$(fileName.toLowerCase().split(' ').join('')}.md',data)
}
*/



























// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const axios = require('axios');

const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//debugging, trying promisify
//reference here https://nodejs.org/dist/latest-v8.x/docs/api/util.html
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);



// TODO: Create an array of questions for user input
const userQuest = [
    {
    type: 'input',
    name: 'github',
    message: 'What is the users GitHub username?',
    default: 'username'
   
    },


   {
    type: 'input',
    name: 'title',
    message: 'What is the title of the Project?',
    default: 'TITLE'
   },


    {
    type: 'input',
    name: 'description',
    message: 'Please provide a useful description of your project',
    default: 'Description',
    },
    
    
    {
        type: 'input',
        name: 'test',
        message: 'What is the command needed to run tests?',
        
        }, 


   {
    type: 'input', 
    name: 'installation',
    message: 'What are the commonda needed to install dependencies',
    default: 'installation'
    },
    
   

    {
    type: 'input',
    name: 'usage',
    message: 'What does a user need to know to use this repository',
    default: 'Usage'
    
    },

    {
    type: 'input',
    message: 'How can a user contribute to the project?',
    name: 'contributing',
    //default: true
    },


{ 
    type: 'input',
    name: 'license',
    message: 'Under what license is the application under?',
    default: 'MIT'
}, 


]


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    writeFileAsync(fileName, data).then(function()  {
        console.log('README FILE IS BEING GENERATED....YOUR PATIENCE WILL BE REWARDED');
    })
     .catch(err => {
         console.log(err);
     })
   
    }

// TODO: Create a function to write README file
//const writeToFile = (filename, data) => {
   // return fileWriteAsync(filename, data);
//}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(userQuest)
    .then(response => {

        const urlQuery = `https://api.github.com/users/${response.github}`;

        //using axios https://www.npmjs.com/package/axios#example
        axios.get(urlQuery)
        .then(res => {
            const data = {
                username: response.username,
                title: response.title,
                description: response.description,
                tableOfContents: response.tableOfContents,
                installation: response.installation,
                usage: response.usage,
                tests: response.tests,
                license: response.license,
                contributing: response.contributing,

                name: res.data.login,
                email: "nbjohnson@gmail.com",
                
            }
            const readmeFileContent = generateMarkdown(data);
            writeToFile('README-Elipticblock5TEST.md', readmeFileContent);
        })
        .catch(err => {
            if (err) throw Error;
        })


})
.catch(err => {
    console.log(err);
})
}



// Function call to initialize app
init(); 
