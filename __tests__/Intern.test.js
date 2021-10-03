const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Constructor", () => {
    it("should create an object", () => {
      const intern = new Intern("John Doe", 1, "fake@fake.fake", "University of Placeholders");
      expect(typeof intern).toEqual("object");
    });

    it("should take a name, id, email, and school name and set them as propertties on the object", () => {
      const name = "John Doe";
      const id = 1;
      const email = "john.doe@fake.net";
      const school = "University of Placeholders";
      const intern = new Intern(name, id, email, school);
      expect(intern.name).toEqual(name);
      expect(intern.id).toEqual(id);
      expect(intern.email).toEqual(email);
      expect(intern.school).toEqual(school.trim());
    });
  });

  describe("getSchool", () => {
    it("should return school name passed to the constructor", () => {
      const name = "John Doe";
      const id = 1;
      const email = "john.doe@fake.net";
      const school = "University of Placeholders";
      const intern = new Intern(name, id, email, school);
      expect(intern.getSchool()).toEqual(school.trim());
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const name = " John Doe ";
      const id = 1;
      const email = "john.doe@fake.net";
      const school = "University of Placeholders";
      const intern = new Intern(name, id, email, school);
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});