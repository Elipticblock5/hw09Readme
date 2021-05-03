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
  
  ## Contributing
  ${data.contributing}

  ## License
  ${data.license} 

  ## Usage
  ${data.usage}
  
  ## Installation
  To install project dependencies run:
  \`\`\`
  ${data.installation}
  \`\`\`


  ## Tests
  To run tests run:
  \`\`\`
  ${data.tests}
  \`\`\`

 

  ## Questions?
  Have any questions? Want to collaborate on a project? Shoot me an [email](${data.email})
    `;
  }
  


module.exports = generateMarkdown;


