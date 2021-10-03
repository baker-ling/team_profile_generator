const inquirer = require('inquirer');
const fs = require('fs');
const inputValidation = require('./lib/inputValidation.js');
const createTeamHTMLFile = require('./lib/createTeamHTMLFile.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

let team = {
  name: '',
  employees: []
};

const trimString = str => str.trim();

const initialQuestions = [
  {
    type: 'input',
    name: 'teamName',
    message: 'Team Name',
    default: 'My Team',
    filter: trimString,
    validate: inputValidation.validateTeamName
  },
  {
    type: 'input',
    name: 'name',
    message: 'Manager Name',
    filter: trimString,
    validate: inputValidation.validateEmployeeName
  },
  {
    type: 'number',
    name: 'id',
    message: answers => `${answers.name}'s Employee ID'`,
    validate: inputValidation.validateId
  },
  {
    type: 'input',
    name: 'email',
    message: answers => `${answers.name}'s Email Address'`,
    filter: trimString,
    validate: inputValidation.validateEmail
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: answers => `${answers.name}'s Office Number'`,
    filter: trimString
  }
];

const addAnotherQuestions = [
  {
    type: 'confirm',
    name: 'addAnother',
    message: 'Add another team member?'
  }
];

const employeeQuestions = [
  {
    type: 'list',
    name: 'typeOfEmployee',
    message: 'What type of employee do you want to add?',
    choices: ['Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'Employee\'s Name',
    filter: trimString,
    validate: inputValidation.validateEmployeeName
  },
  {
    type: 'number',
    name: 'id',
    message: answers => `${answers.name}'s Employee ID'`,
    validate: inputValidation.validateId
  },
  {
    type: 'input',
    name: 'email',
    message: answers => `${answers.name}'s Email Address'`,
    filter: trimString,
    validate: inputValidation.validateEmail
  },
  {
    type: 'input',
    name: 'github',
    message:  answers => `${answers.name}'s GitHub Account Name'`,
    filter: trimString,
    when: answers => answers.typeOfEmployee === 'Engineer'
  },
  {
    type: 'input',
    name: 'school',
    message:  answers => `${answers.name}'s School's Name'`,
    filter: trimString,
    when: answers => answers.typeOfEmployee === 'Intern'
  }
];

function promptToAddAnother() {
  return inquirer.prompt(addAnotherQuestions).then(answers => {
    if (answers.addAnother) {
      return promptForNextEmployee();
    } else {
      createTeamHTMLFile(team);
    }
  })
}

function promptForNextEmployee() {
  return inquirer.prompt(addAnotherQuestions).then(answers => {
    let employee; 
    const {name, id, email, github, school} = answers;
    if (answers.type === "Engineer") {
      employee = new Engineer(name, id, email, github);
    } else {
      employee = new Intern(name, id, email, school);
    }
    team.employees.push(employee);
    return promptToAddAnother();
  });
}



inquirer.prompt(initialQuestions).then(answers => {
  const {teamName, name, id, email, officeNumber } = answers;
  team.name = teamName;
  team.employees.push(new Manager(name, id, email, officeNumber));
  promptToAddAnother();
});