// TODO: Include packages needed for this application
const fs = require('fs');
const inquire =require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'what is your title?',
        name:'title'
    },
    {
        type: 'input',
        message:'please write a description of your repository ',
        name:'description'
    },
    {
        type: 'input',
        message:'please enter your gitHub username ',
        name:'github'
    },
    {
        type: 'input',
        message:'please enter your email ',
        name:'email'
    },
    {
        type:'input',
        message:'please write out a installation instruction',
        name:'Installation'
    },
    {
        type:'input',
        message:'what would you like your usage to be',
        name:'usage'
    },
    {
        type:'input',
        message:'what credits would you like to add',
        name:'credits'
    },
    {
        type: 'checkbox',
        message: 'chose the licenses you used ',
        name: 'licenses',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense']
    },
    {
        type:'input',
        message:'how can people contribitue to this work?',
        name:'contribute'
    },
    {
        type:'input',
        message:'How to test your work',
        name:'test'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquire
.prompt(questions)

.then((response)=>
//console.log(response)
fs.writeFile('NEWREADME.md',`# ${JSON.stringify(response.title,null,'\t')}

## Description
${JSON.stringify(response.description,null,'\t')}

##Questions 

https://api.github.com/users/${response.github}
[Email](${response.email})

## Installation
${JSON.stringify(response.Installation,null,'\t')}
## Usage
${JSON.stringify(response.usage,null,'\t')}
## Credits
${JSON.stringify(response.credits,null,'\t')}

 ## License
 ${JSON.stringify(response.license,null,'\t')}

## How to Contribute
${JSON.stringify(response.contribute,null,'\t')}


## Tests
${JSON.stringify(response.test,null,'\t')}
`
,(err)=>
err ? console.error(err) : console.log("all done")
));
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
