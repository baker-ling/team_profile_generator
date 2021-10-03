const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Constructor", () => {
    it("should create an object", () => {
      const engineer = new Engineer("John Doe", 1, "fake@fake.fake", "gitName");
      expect(typeof engineer).toEqual("object");
    });

    it("should take a name, id, email, and github username and set them as propertties on the object", () => {
      const name = "John Doe";
      const id = 1;
      const email = "john.doe@fake.net";
      const github = "gitName";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.name).toEqual(name);
      expect(engineer.id).toEqual(id);
      expect(engineer.email).toEqual(email);
      expect(engineer.github).toEqual(github);
    });
  });

  describe("getGithub", () => {
    it("should return github username passed to the constructor", () => {
      const name = "John Doe";
      const id = 1;
      const email = "john.doe@fake.net";
      const github = "gitName";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.getGithub()).toEqual(github);
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const name = " John Doe ";
      const id = 1;
      const email = "john.doe@fake.net";
      const engineer = new Engineer(name, id, email);
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});