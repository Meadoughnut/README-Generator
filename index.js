
const inquirer = require("inquirer");
const fs = require('fs');

  inquirer 
    .prompt([
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
        },
        {
            type: 'input',
            message: 'what command should be run to install the dependencies?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'what command should be run to run tests?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'what does the users need to know about using your repository?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'what does the users need to know about contributiong to your repository?',
            name: 'contribution',
        },
        
        
    ]) 
    .then(response => {
    
        fs.writeFile('README.html', HTMLPart(response), err => {
            if (err) throw err;
            console.log('sucess');
            
            
        });
    });
    

    
    <h2>${response.name}</h2>
    function HTMLPart(response) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>readme</title>
        </head>s
        <body> 
        
        <!-- readme -->
        <h2>Description</h2>
        <p>${response.description}</p>
        <h2>Table of contents</h2>
        <p>•<a href="${response.installation}"</a></p>
        <h2>Installation</h2>
        <p>To install the necessary dependencies, run the following command:</p>
        <p>${response.iinstallation}</p>
        <p>•<a href="${response.installation}"</a></p>
        <p>•<a href="${response.usage}"</a></p>
        <p>•<a href="${response.license}"</a></p>
        <p>•<a href="${response.contribution}"</a></p>
        <p>•<a href="${response.tests}"</a></p>
        <p>•<a href="${Questions}"</a></p>
        <h2>Usage</h2>
        <p>${response.usage}</p>
        <h2>Licence</h2>
        <p>This project is licensed under the ${response.license}</p>
        <h2>Contribution</h2>
        <p>${response.contribution}</p>
        <h2>Tests</h2>
        <p>To run tests, use the following command:</p>
        <p>${response.tests}</p>
        <h2>Questions</h2>
        <p>If you have any questions, please contact me via ${response.email}</p>
        <p>youcan find and visit my works on github ${response.github}</p>
        
        </body>
        </html>`;
 
     }
        
       
       
        
        
                
         
       
       
           
    
   
  
            
           
        
          
          

     
       
       
  
   
  
            
           
        
          
          
