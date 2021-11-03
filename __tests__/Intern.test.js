const Intern = require('../lib/Intern.js');

test('The user can create a new Intern object.', () => {
    const newIntern = new Intern();
    expect(typeof(newIntern)).toBe('object');
});

test("The user can get the intern's name using the getName method.", () => {
    const newIntern = new Intern('Bob', '1', 'email@gmail.com', 'ZUniversity');
    expect(newIntern.getName()).toBe('Bob');
});

test("The user can get the intern's id using the getId method.", () => {
    const newIntern = new Intern('Bob', '1', 'email@gmail.com', 'ZUniversity');
    expect(newIntern.getId()).toBe('1');
});

test("The user can get the intern's email using the getEmail method.", () => {
    const newIntern = new Intern('Bob', '1', 'email@gmail.com', 'ZUniversity');
    expect(newIntern.getEmail()).toBe('email@gmail.com');
});

test("The user can get the intern's school name using the getSchool method.", () => {
    const newIntern = new Intern('Bob', '1', 'email@gmail.com', 'ZUniversity');
    expect(newIntern.getSchool()).toBe('ZUniversity');
});

test("The user can get the intern's role using the getRole method.", () => {
    const newIntern = new Intern('Bob', '1', 'email@gmail.com', 'ZUniversity');
    expect(newIntern.getRole()).toBe('Intern');
});