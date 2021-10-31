// Declared variables to pull in required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Declared variables to pull in js files
const Manager = require ('./lib/Manager.js');
const Engineer = require ('./lib/Engineer.js');
const Intern = require ('./lib/Intern.js');

// Declare arrays for employees
const managerArray = [];
const engineerArray = [];
const internArray = [];

// Initial function
function init(){
    inquirer.prompt({
        name: 'userChoice',
        type: 'list',
        message: 'What kind of employee do you want to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish building your team!'],
    }).then(function(data){
        if (data.userChoice === 'Manager'){
            createManager()
        } else if (data.userChoice === 'Engineer'){
            createEngineer();
        } else if (data.userChoice === 'Intern'){
            createIntern();
        } else if (data.userChoice === 'Finish building your team!'){
            createHTML();
            console.log('Your team is built!');
        }
    })
}

// Created Manager function
function createManager() {
    inquirer.prompt([
        {
            name: 'name', 
            type: 'input',
            message: 'What is the name of the manager?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the id of the manager?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the email of the manager?',
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the office number of the manager?',
        },
    ]).then(function(data){
        const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        managerArray.push(newManager);
        init();
    })
}


// Created Engineer function
function createEngineer() {
    inquirer.prompt([
        {
            name: 'name', 
            type: 'input',
            message: 'What is the name of this engineer?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the id of this engineer?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the email of this engineer?',
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is the GitHub username of this engineer?',
        },
    ]).then(function(data){
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
        engineerArray.push(newEngineer);
        init();
    })
}


// Created Intern function
function createIntern() {
    inquirer.prompt([
        {
            name: 'name', 
            type: 'input',
            message: 'What is the name of this intern?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the id of this intern?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the email of this intern?',
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is the school of this intern?',
        },
    ]).then(function(data){
        const newIntern = new Intern(data.name, data.id, data.email, data.school);
        internArray.push(newIntern);
        init();
    })
}

// Function to create HTML file
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
    // Added Manager card
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
    // Added Engineer card
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
    // Added Intern Card
    for (let i = 0; i < internArray.length; i++) {
        html += `
        <div class="internCard">
        <h1>Intern</h1>
        <h2>Name: ${internArray[i].name}</h2>
        <p>Id: ${internArray[i].id}</p>
        <p>Email: ${internArray[i].email}</p>
        <p>School: ${internArray[i].school}</p>
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

createManager();