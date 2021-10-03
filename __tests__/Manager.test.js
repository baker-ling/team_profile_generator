const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Constructor", () => {
    it("should create an object", () => {
      const manager = new Manager("John Doe", 1, "fake@fake.fake", "101");
      expect(typeof manager).toEqual("object");
    });

    it("should take a name, id, email, and office number and set them as propertties on the object", () => {
      const name = "John Doe";
      const id = 1;
      const email = "john.doe@fake.net";
      const officeNumber = "110A";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.name).toEqual(name);
      expect(manager.id).toEqual(id);
      expect(manager.email).toEqual(email);
      expect(manager.officeNumber).toEqual(officeNumber);
    });
  });

  describe("getOfficeNumber", () => {
    it("should return office number passed to the constructor", () => {
      const name = "John Doe";
      const id = 1;
      const email = "john.doe@fake.net";
      const officeNumber = "110A";
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const name = " John Doe ";
      const id = 1;
      const email = "john.doe@fake.net";
      const officeNumber = "143"
      const manager = new Manager(name, id, email, officeNumber);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});