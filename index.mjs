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
            choices: ['Apache 2.0', 'Eclipse 1.0', 'MIT License', 'Mozilla Public License 2.0', 'WTFPL'],
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
${generateBadge(license)}
## How to install
${Installation}
## tests
${tests}
## Links:
![${LinkedInURL}], ![${GitHubURL}]`

await fs.writeFile("README.md", readmeText)

function generateBadge(license) {
    if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (license === "Eclipse 1.0") {
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }
    else if (license === "MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (license === "<Mozilla Public License 2.0>") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else if (license === "WTFPL") {
        return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    }
}