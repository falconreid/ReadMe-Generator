const inquirer = require("inquirer");
const fs = require("fs");
const { clear } = require("console");

// regular function looks like:
// const renderHTML = function(answers) {
const renderMD = ({
  projectName,
  description,
  installIns,
  usage,
  license,
  contributions,
  tests,
  githubRepo,
  githubDeploy,
  LinkedIn,
  email,
}) => {
  return `
  # ${projectName}
  ## Description
  ${description}
  ###Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  
  ###<a name="Installation">Installation</a>
  ${installIns}

  ###<a name="Usage">Usage</a>
  ${usage}

  ###<a name="License">License</a>
  ${makeBadge(license)}

  ###<a name="Contributing">Contributing</a>
  ${contributions}

  ###<a name="Tests">Tests</a>
  ${tests}

  #### Learn More/Contact Me:
  ##### Github Repo URL: ![Click Here](${githubRepo})
  ##### Deployed Github URL: ![Click Here](${githubDeploy})
  ##### LinkedIn profile: ![Click Here](${LinkedIn})
  ##### Email: [${email}](mailto:${email})
    `;
};

inquirer
  .prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the title of your Project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe what your project does.",
    },
    {
      type: "input",
      name: "installIns",
      message: "Please explain how to install your program.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please explain how to use your program.",
    },
    {
      type: "list",
      name: "license",
      message: "Which license does this project utilize?",
      choices: ["CC0-1.0", "Apache-2.0", "GPL v3", "MIT", "ISC"],
    },
    {
      type: "input",
      name: "contributions",
      message: "What are your contribution guidelines?",
    },
    {
      type: "input",
      name: "tests",
      message: "Which tests should be run?",
    },
    {
      type: "input",
      name: "githubRepo",
      message: "What is the URL of your Github Repo?",
    },
    {
      type: "input",
      name: "githubDeploy",
      message: "What is the Github URL of your deployed project?",
    },
    {
      type: "input",
      name: "LinkedIn",
      message: "What is your LinkedIn URL?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ])

  .then((answers) => {
    const md = renderMD(answers);
    fs.writeFile("README.md", md, (err) => {
      if (err) throw err;
      console.log(err);
    });
    const badge = answers.license;
    console.log(md);
  })
  .catch((error) => {
    console.log(error);
  });

// function to create badges from license data
function makeBadge(license) {
  switch (license) {
    case "CC0-1.0":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]";
      break;
    case "Apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      break;
    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
      break;
  }
}

// function to initialize program
function init() {}

// function call to initialize program
init();
