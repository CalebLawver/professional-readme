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
        name: 'usage',
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
        name: 'contributing',
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
        name: 'test',
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
        type: 'checkbox',
        name: 'license',
        message: 'Choose the license for this project? *Required*',
        choice: ['Artistic-2.0', 'Apache-2.0', 'BSD-3-Clause', 'BSD 2-Clause', 'EPL-1.0', 'IPL-1.0', 'ISC', 'MIT', 'MPL-2.0', 'OFL-1.1'],
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
        name: 'github',
        message: 'Enter your GitHub repository. *Required*',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You need to provide your GitHub!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter your contact information. (Or leave blank)',
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
    .then(inputData => {
        console.log('Creating your README!')
        writeToFile("README.md", generateMarkdown(inputData));
    });
};

// Function call to initialize app
init();
