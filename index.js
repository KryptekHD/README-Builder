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
        type:'input',
        message:'please select the licenses you used',
        name:'license'
    },
    {
        type:'input',
        message:'how can people contribiye to this work?',
        name:'how to crontribute'
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
fs.writeFile('README.md',`# ${JSON.stringify(response.name,null,'\t')}

## Description
${JSON.stringify(response.name,null,'\t')}

## Installation

## Usage

## Credits


## License


## How to Contribute



## Tests

`,(err)=>
err ? console.error(err) : console.log("all done")
));
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
