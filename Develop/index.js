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
        message: 'How do you install your project? *Required*',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need to provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How do you install your project? *Required*',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need to provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How can people contribute to this project? *Required*',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need to tell people how they can contribute!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Test',
        message: 'How do you test your project? *Required*',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need to inform people how they can test this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'License',
        message: 'Choose the license for this project? *Required*',
        choice: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You must pick a license!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Enter your GitHub username *Required*',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need to provide your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email. (ONLY IF YOU WANT IT INCLUDED)',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("You've made your README.")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (input) {
        console.log(input)
        writeToFile("README.md", generateMarkdown(input));
    });
};

// Function call to initialize app
init();
