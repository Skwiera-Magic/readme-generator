import inquirer from 'inquirer';
import fs from "fs/promises"

let { projectTitle, projectDescription, license, installation, usage, tests, email, gitHubUsername, contributing, questions } = await inquirer
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
            name: 'installation',
            message: 'How do you install your app?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are your tests?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'gitHubUsername',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How to contribute to your project?'
        }
    ])


let readmeText =
    `# ${projectTitle}
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
${usage}
## Tests
${tests}
## Contributing
${contributing}
## Questions
You can contact me on my email: [${email}](${email})
Or you can check my other projects on GitHub: [${gitHubUsername}](https://github.com/${gitHubUsername})
`

await fs.writeFile("generated-README.md", readmeText)

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