const Manager = require('../lib/Manager.js');

test('The user can create a new Manager object.', () => {
    const newManager = new Manager();
    expect(typeof(newManager)).toBe('object');
});

test("The user can get the manager's name using the getName method.", () => {
    const newManager = new Manager('Bob', '1', 'email@gmail.com', '999');
    expect(newManager.getName()).toBe('Bob');
});

test("The user can get the manager's id using the getId method.", () => {
    const newManager = new Manager('Bob', '1', 'email@gmail.com', '999');
    expect(newManager.getId()).toBe('1');
});

test("The user can get the manager's email using the getEmail method.", () => {
    const newManager = new Manager('Bob', '1', 'email@gmail.com', '999');
    expect(newManager.getEmail()).toBe('email@gmail.com');
});

test("The user can get the manager's office number using the getOfficeNumber method.", () => {
    const newManager = new Manager('Bob', '1', 'email@gmail.com', '999');
    expect(newManager.getOfficeNumber()).toBe('999');
});

test("The user can get the manager's role using the getRole method.", () => {
    const newManager = new Manager('Bob', '1', 'email@gmail.com', '999');
    expect(newManager.getRole()).toBe('Manager');
});