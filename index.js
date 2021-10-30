const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require ('./lib/Manager.js');
const Engineer = require ('./lib/Engineer.js');
const Intern = require ('./lib/Intern.js');

const managerArray = [];
const engineerArray = [];
const internArray = [];

// const Colleen = new Manager('Colleen', '3853', 'email@email.com', '1');

// const Brett = new Manager('Brett', '4853', 'email@email.com', '2');

// console.log(Colleen.getId());
// console.log(Brett.getId());

function init(){
    inquirer.prompt({
        name: 'userChoice',
        type: 'list',
        message: 'What kind of employee do you want to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'exitProgram'],
    }).then(function(data){
        if (data.userChoice === 'Manager'){
            createManager()
        } else if (data.userChoice === 'exitProgram'){
            createHTML();
        } else if (data.userChoice === 'Engineer'){
            createEngineer();
        } else if (data.userChoice === 'Intern'){
            createIntern();
        }
    })
}
function createManager() {
    inquirer.prompt([
        {
            name: 'name', 
            type: 'input',
            message: 'What is the name of this employee?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the id of this employee?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the email of this employee?',
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the office number of this employee?',
        },
    ]).then(function(data){
        const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        managerArray.push(newManager);
        init();
    })
}
init ();

function createEngineer() {
    inquirer.prompt([
        {
            name: 'name', 
            type: 'input',
            message: 'What is the name of this employee?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the id of this employee?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the email of this employee?',
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is the GitHub username of this employee?',
        },
    ]).then(function(data){
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
        engineerArray.push(newEngineer);
        init();
    })
}
init ();

function createIntern() {
    inquirer.prompt([
        {
            name: 'name', 
            type: 'input',
            message: 'What is the name of this employee?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the id of this employee?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the email of this employee?',
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is the school of this employee?',
        },
    ]).then(function(data){
        const newIntern = new Intern(data.name, data.id, data.email, data.school);
        internArray.push(newIntern);
        init();
    })
}
init ();

function createHTML(){
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>`;

    for (let i = 0; i < managerArray.length; i++) {
        html += `
        <div class="managerCard">
        <h1>Manager</h1>
        <h2>Name: ${managerArray[i].name}</h2>
        <p>Id: ${managerArray[i].id}</p>
        <p>Email: ${managerArray[i].email}</p>
        <p>Office Number: ${managerArray[i].officeNumber}</p>
        </div>`
    }
    for (let i = 0; i < engineerArray.length; i++) {
        html += `
        <div class="engineerCard">
        <h1>Engineer</h1>
        <h2>Name: ${engineerArray[i].name}</h2>
        <p>Id: ${engineerArray[i].id}</p>
        <p>Email: ${engineerArray[i].email}</p>
        <p>GitHub Username: ${engineerArray[i].github}</p>
        </div>`
    }
    for (let i = 0; i < internArray.length; i++) {
        html += `
        <div class="internCard">
        <h1>Intern</h1>
        <h2>Name: ${internArray[i].name}</h2>
        <p>Id: ${internArray[i].id}</p>
        <p>Email: ${internArray[i].email}</p>
        <p>School: ${internArray[i].github}</p>
        </div>`
    }

html += `
</body>
</html>`

fs.writeFile('./dist/index.html', html, (error) => {
    if(error){
    console.log(error);
}
});
}