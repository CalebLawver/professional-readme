// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? *Required*',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need to name your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your project is. *Required*',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need to leave a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? *Required*';
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need to provide installation instructions!');
                return false;
            }
        }
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
