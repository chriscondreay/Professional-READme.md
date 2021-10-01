// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the purpose of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What was your motivation for the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What were some of the hardships and challenges that you faced? What did you do, if any, to solve them?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What were the steps taken to install your project',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Did you collaborate with anyone?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license type would you like to choose?',
    options: ['MIT', 'Apache', 'The Unlicense']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
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
