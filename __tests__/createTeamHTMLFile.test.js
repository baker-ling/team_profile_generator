const {
  createTeamHTMLFile,
  generateCardHTML,
  generateEmployeeSubtitleText,
  generateEmployeeInfoList
} = require('../lib/createTeamHTMLFile.js');
const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager.js');

describe('generateEmployeeSubtitleText', () => {
  it("should return a string", ()=> {
    const employee = new Employee("John", 1, "a@b.c");
    expect(typeof generateEmployeeSubtitleText(employee)).toEqual("string");
  });
  it("should include the role of the employee", () => {
    const employee = new Employee("John", 1, "a@b.c");
    const manager = new Manager("Jane", 2, "j@b.c", "101");
    const engineer = new Engineer("Joe", 3, "joe@b.c", "joejoejoejoe");
    const intern = new Intern("Jack", 4, "jack@b.c", "JOSU");

    expect(generateEmployeeSubtitleText(employee).includes(employee.getRole())).toBeTruthy();
    expect(generateEmployeeSubtitleText(manager).includes(manager.getRole())).toBeTruthy();
    expect(generateEmployeeSubtitleText(engineer).includes(engineer.getRole())).toBeTruthy();
    expect(generateEmployeeSubtitleText(intern).includes(intern.getRole())).toBeTruthy();
  });
});

describe('generateEmployeeInfoList', () => {
  it("should return a string", ()=> {
    const employee = new Employee("John", 1, "a@b.c");
    expect(typeof generateEmployeeInfoList(employee)).toEqual("string");
  });
  it("should include the employee's ID", () => {
    const employee = new Employee("John", 1234, "a@b.c");
    expect(generateEmployeeInfoList(employee).includes(employee.getId())).toBeTruthy();
  });
  
  it("should include a mailto link and the employee's email if the employee has an email", () => {
    const employee = new Employee("John", 1234, "a@b.c");
    const mailtoLinkText = `mailto:${employee.getEmail()}`
    expect(generateEmployeeInfoList(employee).includes(mailtoLinkText)).toBeTruthy();
  });
  it("should not include a mailto link if the employee doesn't have an email", () => {
    const employee = new Employee("John", 1234);
    const mailtoLinkText = `mailto:`
    expect(generateEmployeeInfoList(employee).includes(mailtoLinkText)).toBeFalsy();
  });
  it("should a manager's office number", () => {
    const manager = new Manager("Jane", 2, "j@b.c", "101");
    expect(generateEmployeeInfoList(manager).includes(manager.getOfficeNumber())).toBeTruthy();
  });
  it("should a link to an engineer's github page", () => {
    const engineer = new Engineer("Joe", 3, "joe@b.c", "joejoejoejoe");
    const githubLinkText = `<a href="https://github.com/${engineer.getGithub()}" target="_blank">`;
    expect(generateEmployeeInfoList(engineer).includes(githubLinkText)).toBeTruthy();
  });
  it("should an intern's school", () => {
    const intern = new Intern("Jack", 4, "jack@b.c", "JOSU");
    expect(generateEmployeeInfoList(intern).includes(intern.getSchool())).toBeTruthy();
  });
});