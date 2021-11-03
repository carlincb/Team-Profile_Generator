const Employee = require('../lib/Employee.js');

test('The user can create a new Employee object.', () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe('object');
});

test("The user can get the employee's name using the getName method.", () => {
    const newEmployee = new Employee('Bob', '1', 'email@gmail.com');
    expect(newEmployee.getName()).toBe('Bob');
});

test("The user can get the employee's id using the getId method.", () => {
    const newEmployee = new Employee('Bob', '1', 'email@gmail.com');
    expect(newEmployee.getId()).toBe('1');
});

test("The user can get the employee's email using the getEmail method.", () => {
    const newEmployee = new Employee('Bob', '1', 'email@gmail.com');
    expect(newEmployee.getEmail()).toBe('email@gmail.com');
});

test("The user can get the employee's role using the getRole method.", () => {
    const newEmployee = new Employee('Bob', '1', 'email@gmail.com');
    expect(newEmployee.getRole()).toBe('Employee');
});
