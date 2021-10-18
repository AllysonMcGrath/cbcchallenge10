// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const team = require('./src/page-template');


const fs = require('fs');

const employeeArr = [];


function writeFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if(error){
      console.log(error);
    }
  });
}


const managerQuestions = () => {
  return inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: managerNameInput => {
          if(managerNameInput) {
            return true;
          }
          else {
            console.log("Please enter the manager's name");
            return false;
          }
        }
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID?",
        validate: managerIdInput => {
          if(managerIdInput) {
            return true;
          }
          else {
            console.log("Please enter the manager's ID");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
        validate: managerEmailInput => {
          if(managerEmailInput) {
            return true;
          }
          else {
            console.log("Please enter the manager's email");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?",
        validate: managerOfficeInput => {
          if(managerOfficeInput) {
            return true;
          }
          else {
            console.log("Please enter the manager's office number");
            return false;
          }
        }
      },

]).then(data => {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
    employeeArr.push(manager)
})
.then(() => {
  createTeam();
  })
};

const createTeam = () => {
    return inquirer.prompt([
          {
            type: "list",
            name: "createEmployee",
            message: "What type of employee do you want to add?",
            choices: ["Engineer", "Intern", "None"]
          }
        ])
      
        .then(data => {
            switch(data.createEmployee) {
                case "Engineer":
                    engineerQuestions();
                    break;
                case "Intern":
                    internQuestions();
                    break;
                case "None":
                  console.log("print");
                    writeFile("index.html", team(employeeArr));
                    break;
            }
          }
        )};


const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
            validate: nameInput => {
                if(nameInput) {
                return true;
                }
                else {
                console.log("Please enter the employee's name");
                return false;
                }
            }
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee's id?",
          validate: nameInput => {
              if(nameInput) {
              return true;
              }
              else {
              console.log("Please enter the employee's id");
              return false;
              }
          }
          },
          {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
            validate: nameInput => {
                if(nameInput) {
                return true;
                }
                else {
                console.log("Please enter the employee's email");
                return false;
                }
            }
          },
          {
            type: "input",
            name: "github",
            message: "What is the employee's github?",
            validate: nameInput => {
                if(nameInput) {
                return true;
                }
                else {
                console.log("Please enter the employee's github");
                return false;
                }
            }
        },
    ])
    .then(response => {
      const engineer = new Engineer(response.name, response.id, response.email, response.github);
      employeeArr.push(engineer);
      createTeam();
  })
};

const internQuestions = () => {
  return inquirer.prompt([
      {
          type: "input",
          name: "name",
          message: "What is the intern's name?",
          validate: nameInput => {
              if(nameInput) {
              return true;
              }
              else {
              console.log("Please enter the intern's name");
              return false;
              }
          }
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
        validate: nameInput => {
            if(nameInput) {
            return true;
            }
            else {
            console.log("Please enter the intern's id");
            return false;
            }
        }
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email?",
          validate: nameInput => {
              if(nameInput) {
              return true;
              }
              else {
              console.log("Please enter the intern's email");
              return false;
              }
          }
        },
        {
          type: "input",
          name: "school",
          message: "What is the intern's school?",
          validate: nameInput => {
              if(nameInput) {
              return true;
              }
              else {
              console.log("Please enter the intern's school");
              return false;
              }
          }
      },
  ])
    .then(response => {
      const intern = new Intern(response.name, response.id, response.email, response.school);
      employeeArr.push(intern);
      createTeam();
  })
};


managerQuestions();
