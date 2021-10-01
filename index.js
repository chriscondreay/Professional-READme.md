// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What is the purpose of your project',
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project',
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return (err);
    }
      return('file written')
  })
}

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions)
  .then (answers => {
    const md = genMarkdown(answers)
    writeToFile('READMe.md', md)
  })
}

// Function call to initialize app
init();
