
const inquirer = require("inquirer");
const generateMarkdown = require ("./utils/generateMarkdown");
const fs = require("fs");



// array of questions for user
const questions = [
  {
      type = "input",
      name = "title",
      massage = "What is the Title of your application ?"
  },  
  {
    type: "input",
    name: "deployedURL",
    message: "Provide the URL for your deployed application."
  },
  {
    type: "input",
    name: "screenShot",
    message: "Provide the URL for a screenshot of you application."
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your application?"
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your application?",
    default: "npm install"
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide any use instructions for your application?"
  },
  {
    type: 'list',
    message: "Which license will your application be published under?",
    name: 'license',
    choices: [
      'MIT',
      'Apache',
      'GPL v3'
    ],
    default: 'MIT'
  },
  {
    type: "input",
    name: "contribute",
    message: "How can people contribute to the application?",
  },
  {
    type: "input",
    name: "testing",
    message: "How is testing performed?",
    default: "npm test"
  },
  {
    type: "input",
    name: "name",
    message: "Please enter your full name.",
  },
  {
    type: "input",
    name: "email",
    message: "please enter your email address.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GutHub username?"
  },
  {
    type: "input",
    name: "credits",
    message: "Please provide any acknowledgements or credits."
  }
];

inquirer.prompt(questions).then(function (data) {
  writeToFile("README.md", generateMarkdown(data));

  generateMarkdown(data);
  console.log(`Thanks ${data.name},ReadMe is being created.`);

}, function (err) {
  console.log(err);
});

// function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function (err) {
    if (err) return console.log(err);
    console.log(`Successfully created a ReadMe!`);
  });

}  