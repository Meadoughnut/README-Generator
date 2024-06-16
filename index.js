const inquirer = require("inquirer");
const fs = require('fs');

// Questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please write a brief description of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'what kind of license should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            message: 'what command should be run to install the dependencies?',
            name: 'installation',
            default: 'npm install'
        },
        {
            type: 'input',
            message: 'what command should be run to run tests?',
            name: 'tests',
            default: 'npm test'
        },
        {
            type: 'input',
            message: 'what does the users need to know about using the repository?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'what does the users need to know about contributiong to the repository?',
            name: 'contribution',
        },
    ];
        
        
    // Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('Success!');
    });
}

    
//Function to generate markdown for README
    function generateMarkdown(response) {
        return `
        # ${response.title}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:
\`\`\`
${response.installation}
\`\`\`

## Usage
${response.usage}

## License
This project is licensed under the ${response.license} license.

## Contributing
${response.contribution}

## Tests
To run tests, use the following command:
\`\`\`
${response.tests}
\`\`\`

## Questions
If you have any questions, please contact me via email at [${response.email}](mailto:${response.email}). 
You can find more of my work on GitHub at [${response.github}](https://github.com/${response.github}).
`;
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const markdownContent = generateMarkdown(response);
            writeToFile('README.md', markdownContent);
        });
}

// Function call to initialize app
init();
  
       
           
    
   
  
            
           
        
          
          

     
       
       
  
   
  
            
           
        
          
          
