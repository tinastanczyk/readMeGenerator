// Include packages needed for this application
// included to create and write into a file
const fs = require("fs");
// included to prompt user and capture input
const inquirer = require("inquirer");
// included to build the content in the file
const markDown = require("./utils/generateMarkdown");

// Created an array of objects to prompt the user and capture user input
const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "projectTitle",
  },
  {
    type: "input",
    message:
      "What was your motivation? Why did you build this project? What problem does it solve? What did you learn?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message:
      "How do you use your application? (Insert a link to your application using .jpg or .png)",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Who are the collaborators, what third-party assets, or tutorials did you use?",
    name: "credits",
  },
  {
    type: "list",
    message: "Choose a license: ",
    choices: ["MIT", "GNU", "Apache"],
    name: "license",
  },
  {
    type: "input",
    message: "Does your project have any Badges?",
    name: "badges",
  },
  { type: "input", message: "List your projects features: ", name: "features" },
  {
    type: "input",
    message: "How can the user contribute?",
    name: "contributions",
  },
  { type: "input", message: "What tests have you done?", name: "tests" },
  {
    type: "input",
    message: "Email to be reached with further questions: ",
    name: "email",
  },
  {
    type: "input",
    message: "Github to be reached with further questions: ",
    name: "github",
  },
  { type: "input", message: "What is your full name?", name: "user" }
];

// Created a function to write README file
function writeToFile(fileName, data) {
 fs.writeFile(fileName, markDown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// Created a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      // generating new readme in separate folder so it doesn't overwrite the application's readme
      writeToFile("./assets/README.md", response)
  });
}

// Function call to initialize app
init();