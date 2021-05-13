const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const creation = require("./src/createhtml.js")

console.log("Welcome to the quick Team Builder. Please follow the on screen directions.")

let employees = [];

function writeIt() {
    let middleBit = ""
    for (let index = 0; index < employees.length; index++) {
        const element = employees[index];
        middleBit += element.card()
    }
    let txtToWrite = creation.firstHalf() + middleBit + creation.secondHalf()
    fs.writeFile("./dist/index.html", txtToWrite, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

const initTeamManager = () => {
    inquirer.prompt(
        [{
            type: 'input',
            name: 'name',
            message: "Please input the name of the Team Manager.",
        },
        {
            type: 'input',
            name: 'empID',
            message: "Please input the Employee ID of the Team Manager.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please input the Email of the Team Manager.",
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Please input the office number of the Team Manager.",
        }]
    ).then((answers) => {
        employees.push(new Manager(answers.empID, answers.name, answers.email, answers.officeNum))
        menuForAddingMore()
    })
}

const menuForAddingMore = () => {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Select another kind of employee to add, or exit with "Done"',
        choices: ['Engineer', 'Intern', 'Done'],
    }).then((answer) => {
        switch (answer.choice) {
            case 'Engineer':
                engineerPrompt()
                break;
            case 'Intern':
                internPrompt()
                break;
            case 'Done':
                writeIt()
                break;
            default:
                break;
        }
    })
}

//engineer’s name, ID, email, and GitHub username,
const engineerPrompt = () => {
    inquirer.prompt(
        [{
            type: 'input',
            name: 'name',
            message: "Please input the Engineer's name.",
        },
        {
            type: 'input',
            name: 'empID',
            message: "Please input the Engineer's ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please input the Engineer's email address.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please input the Engineer's Github username.",
        }]
    ).then((answers) => {
        employees.push(new Engineer(answers.empID, answers.name, answers.email, answers.github))
        menuForAddingMore()
    })
}

// intern’s name, ID, email, and school
const internPrompt = () => {
    inquirer.prompt(
        [{
            type: 'input',
            name: 'name',
            message: "Please input the Intern's name.",
        },
        {
            type: 'input',
            name: 'empID',
            message: "Please input the Intern's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please input the Intern's email.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please input the school the Intern went to",
        }]
    ).then((answers) => {
        employees.push(new Intern(answers.empID, answers.name, answers.email, answers.school))
        menuForAddingMore()
    })
}
initTeamManager()