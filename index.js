const fs = require('fs')
const inquirer = require('inquirer')




inquirer
    .prompt([
        {
            type: 'input',
            message: 
'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 
`Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? 
- What problem does it solve?
- What did you learn? 
`,
            name: 'description'
        },
        {
            type: 'input',
            message: 
`What are the steps required to install your project?
Provide a step-by-step description of how to get the development environment running.`,
             name: 'installation'
        },
        {
            type: 'input',
            message: 
`Provide instructions and examples for use. Include screenshots as needed.`,
            name: 'instructions',
        },
        {
            type: 'input',
            message: 
`List your collaborators, if any, with links to their GitHub profiles. 
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.`,
            name: 'collabs'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'list',
            message: 
`Choose your licensing`,
            choices: ['MIT', 'GPLv2', 'Apache', 'BSD 3-clause'],
            name: 'license',
        }
    ]).then((answers) =>{
        console.log(answers)
        const filename = './holder/readme.md';
        const filecontent = 
`# ${answers.title}
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
## Description
- ${answers.description}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)
## Installation
- ${answers.installation}
## Usage
- ${answers.instructions}
## Credits
- ${answers.collabs}
## Questions
- github.com/${answers.github}
- You may reach me here at for any qeustions ${answers.email}
## License
- ${answers.license}
`

        fs.writeFile(filename, filecontent, (err) =>
        err? console.error(err) : console.log('Generated readme'))
        
    })