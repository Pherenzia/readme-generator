const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: "What "
        }
    ])