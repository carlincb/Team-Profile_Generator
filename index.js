const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require ('./lib/Manager.js');

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
// engineer and intern loops
html += `
</body>
</html>`

fs.writeFile('./dist/index.html', html, (error) => {
    if(error){
    console.log(error);
}
});
}