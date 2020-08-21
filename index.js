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
  ${license}

  ###<a name="Contributing">Contributing</a>
  ${contributions}

  ###<a name="Tests">Tests</a>
  ${tests}

  #### Learn More/Contact Me:
  #### Github Repo URL: ![](${githubRepo})
  #### Deployed Github URL: ![](${githubDeploy})
  #### LinkedIn profile: ![](${LinkedIn})
  #### Email: [${email}](mailto:${email})
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
      type: "checkbox",
      name: "license",
      message: "Which license does this project utilize?",
      choices: [
        "CC0-1.0 - Creative Commons",
        "Apache-2.0",
        "GPL v3",
        "MIT",
        "ISC",
      ],
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
    console.log(md);
  })
  .catch((error) => {
    console.log(error);
  });

// function to initialize program
function init() {}

// function call to initialize program
init();
