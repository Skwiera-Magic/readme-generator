import inquirer from 'inquirer';
import fs from "fs/promises"

let { projectTitle, projectDescription, license, Installation, tests, LinkedInURL, GitHubURL} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: "What's your project title?",
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: "What's your project description?"
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you want?',
            choices: ['HTML', 'CSS', 'JS', 'ES6', 'Node.js'],
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How do you install your app?'
        },
        {
            type:'input',
            name:'tests',
            message: 'What is your tests?'
        },
        {
            type:'input',
            name:'LinkedInURL',
            message: 'What is your LinkedIn URL?'
        },
        {
            type:'input',
            name:'GitHubURL',
            message: 'What is your GitHub URL?'
        }
    ])


let readmeText = 
`# README
## Project Title
${projectTitle}
## Project description
${projectDescription}
## Table of Contents
## License
${license}
## How to install
${Installation}
## tests
${tests}
## Links:
![${LinkedInURL}], ![${GitHubURL}]`

await fs.writeFile("README.md", readmeText)
