import inquirer from 'inquirer';
import fs from "fs/promises"

let { projectTitle, projectDescription, license, installation, tests, email, GitHubURL} = await inquirer
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
            choices: ['Apache 2.0', 'Eclipse 1.0', 'MIT License', 'WTFPL'],
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
            name:'email',
            message: 'What is your email address?'
        },
        {
            type:'input',
            name:'GitHubURL',
            message: 'What is your GitHub username?'
        }
    ])


let readmeText = 
`# README
## Project Title
${projectTitle}
## Project description
${projectDescription}
## Table of Contents
- [Overview](#overview)
  - [License](#license)
  - [Installation](#installation)
  - [Tests](#tests)
  - [Usage](#usage)
  - [Links](#links)
- [Contributing](#contributing)
- [Questions](#questions)
## License
${generateBadge(license)}
## Installation
${installation}
## Usage
// todo
## Tests
${tests}
## Links:
Email: [${email}](${email}), GitHub: [${GitHubURL}](${GitHubURL})
## Contributing
// todo
## Questions
// todo`

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
    else if (license === "WTFPL") {
        return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    }
}