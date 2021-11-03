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
function init() {
    console.log('Welcome to the Team Profile Generator! To get started, we will begin by asking you for details regarding your Manager.');
    createManager();
}
// Team builder function
function teamBuilder(){
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
        teamBuilder();
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
        teamBuilder();
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
        teamBuilder();
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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/ca6e5b2cf1.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./assets/style.css">
        <title>My Team</title>
    </head>
    <body>
        <main role="main">
            <section class="jumbotron text-center bg-danger">
                <div class="container">
                    <header class="jumbotron-heading text-white">
                        <h1>My Team</h1>
                    </header>
                </div>
            </section>
            <section class="container">
                <div class="row">`;

    // Added Manager card
    for (let i = 0; i < managerArray.length; i++) {
        html += `
                <div class="col-md-4">
                    <div class="row m-1">
                        <div class="card mb-4 box-shadow" style="width: 18rem;">
                            <div class="card-body">
                                <div class="bg-primary">
                                    <h1 class="card-title text-white bg-primary text-center">${managerArray[i].name}</h1>
                                    <h2 class="card-subtitle text-white bg-primary text-center"><span><i class="fas fa-mug-hot"></i></span> Manager</h2>
                                </div>
        
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Id: ${managerArray[i].id}</li>
                                    <li class="list-group-item">Email: <a href = "mailto: ${managerArray[i].email}"> ${managerArray[i].email}</a></li>
                                    <li class="list-group-item">Office Number: ${managerArray[i].officeNumber}</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>`
    }
    // Added Engineer card
    for (let i = 0; i < engineerArray.length; i++) {
        html += `
                <div class="col-md-4">
                    <div class="row m-1">
                        <div class="card mb-4 box-shadow" style="width: 18rem;">
                            <div class="card-body">
                                <div class="bg-primary">
                                    <h1 class="card-title text-white bg-primary text-center">${engineerArray[i].name}</h1>
                                    <h2 class="card-subtitle text-white bg-primary text-center"><span><i class="fas fa-glasses"></i></span> Engineer</h2>
                                </div>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Id: ${engineerArray[i].id}</li>
                                    <li class="list-group-item">Email: <a href = "mailto: ${engineerArray[i].email}"> ${engineerArray[i].email}</a></li>
                                    <li class="list-group-item">GitHub Username: <a href="https://github.com/${engineerArray[i].github}" target="_blank">${engineerArray[i].github}</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>`
    }
    // Added Intern Card
    for (let i = 0; i < internArray.length; i++) {
        html += `
                <div class="col-md-4">
                    <div class="row m-1">
                        <div class="card mb-4 box-shadow" style="width: 18rem;">
                            <div class="card-body">
                                <div  class="bg-primary">
                                    <h1 class="card-title text-white bg-primary text-center">${internArray[i].name}</h1>
                                    <h2 class="card-subtitle text-white bg-primary text-center"><span><i class="fas fa-user-graduate"></i></span> Intern</h2>
                                </div>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Id: ${internArray[i].id}</li>
                                    <li class="list-group-item">Email: <a href = "mailto: ${internArray[i].email}"> ${internArray[i].email}</a></li>
                                    <li class="list-group-item">School: ${internArray[i].school}</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>`
    }

html += `
            </div>
        </section>
    </main>
</body>
</html>`

fs.writeFile('./dist/index.html', html, (error) => {
    if(error){
    console.log(error);
}
});
}
// Calling initial function
init();