const Manager = require ('./lib/Manager.js');

const Colleen = new Manager('Colleen', '3853', 'email@email.com', '1');

const Brett = new Manager('Brett', '4853', 'email@email.com', '2');

console.log(Colleen.getId());
console.log(Brett.getId());

