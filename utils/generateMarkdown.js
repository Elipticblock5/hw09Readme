//new code starting over




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

//grabs data from questions and fills out tempalate with data tags
function generateMarkdown(data) {

  return `# ${data.title} 
  ## Description
  
  ${data.description} 
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions?](#questions)
  
  ## Contributing  Information
  ${data.contributing}

  ## License Information
  ${data.license} 

  ## Usage
  ${data.usage}
  
  ## Installation instructions
  To install project dependencies run:
  
  ${data.installation}
  
  ## Tests, to run tests on repo
  To run tests run:
  
  ${data.tests}
  
 
  ## Questions for me?
  Have any questions? Shoot me an [email](${data.email})
    `;
  }
  


module.exports = generateMarkdown;

