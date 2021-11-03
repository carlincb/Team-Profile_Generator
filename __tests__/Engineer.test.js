const Engineer = require('../lib/Engineer.js');

test('The user can create a new Engineer object.', () => {
    const newEngineer = new Engineer();
    expect(typeof(newEngineer)).toBe('object');
});

test("The user can get the engineer's name using the getName method.", () => {
    const newEngineer = new Engineer('Bob', '1', 'email@gmail.com', 'carlincb');
    expect(newEngineer.getName()).toBe('Bob');
});

test("The user can get the engineer's id using the getId method.", () => {
    const newEngineer = new Engineer('Bob', '1', 'email@gmail.com', 'carlincb');
    expect(newEngineer.getId()).toBe('1');
});

test("The user can get the engineer's email using the getEmail method.", () => {
    const newEngineer = new Engineer('Bob', '1', 'email@gmail.com', 'carlincb');
    expect(newEngineer.getEmail()).toBe('email@gmail.com');
});

test("The user can get the engineer's GitHub username using the getGitHub method.", () => {
    const newEngineer = new Engineer('Bob', '1', 'email@gmail.com', 'carlincb');
    expect(newEngineer.getGithub()).toBe('carlincb');
});

test("The user can get the engineer's role using the getRole method.", () => {
    const newEngineer = new Engineer('Bob', '1', 'email@gmail.com', 'carlincb');
    expect(newEngineer.getRole()).toBe('Engineer');
});
