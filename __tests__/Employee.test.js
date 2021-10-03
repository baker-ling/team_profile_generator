const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Constructor", () => {
    it("should create an object", () => {
      const employee = new Employee("John Doe", 1, "fake@fake.fake");
      expect(typeof employee).toEqual("object");
    });

    it("should take a name, id, email and set them as propertties on the object", () => {
      const name = "John Doe";
      const id = 1;
      const email = "john.doe@fake.net";
      const employee = new Employee(name, id, email);
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    });

    it("should raise an error if name doesn't contain any non-whitespace characters", () => {
      const name = " ";
      const id = 1;
      const email = "john.doe@fake.net";
      expect(() => { new Employee(name, id, email); }).toThrow();
    });

    it("should raise an error if id is not a non-negative integer", () => {
      const name = "John Doe";
      const badId1 = "1";
      const badId2 = -1;
      const badId3 = 0.5;
      const email = "john.doe@fake.net";

      expect(() => { new Employee(name, badId1, email); }).toThrow();
      expect(() => { new Employee(name, badId2, email); }).toThrow();
      expect(() => { new Employee(name, badId3, email); }).toThrow();
    });

    it("should raise an error if an email is provided but it is not a string with an @ inside", () => {
      const name = "John Doe";
      const id = 1;
      const badEmail = "john.doefake.net";
      expect(() => { new Employee(name, id, badEmail); }).toThrow();
    });
  });

  describe("getName", () => {
    it("should return the name provided when creating the object, trimmed of whitespace", () => {
      const name = " John Doe ";
      const id = 1;
      const email = "john.doe@fake.net";
      const employee = new Employee(name, id, email);
      expect(employee.getName()).toEqual(name.trim());
    });
  });

  describe("getId", () => {
    it("should return the id provided when creating the object", () => {
      const name = " John Doe ";
      const id = 1;
      const email = "john.doe@fake.net";
      const employee = new Employee(name, id, email);
      expect(employee.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return a string", () => {
      const name = " John Doe ";
      const id = 1;
      const employee = new Employee(name, id);
      expect(typeof employee.getEmail()).toEqual("string");
    });

    it("should return the email provided when creating the object", () => {
      const name = " John Doe ";
      const id = 1;
      const email = "john.doe@fake.net";
      const employee = new Employee(name, id, email);
      expect(employee.getEmail()).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const name = " John Doe ";
      const id = 1;
      const email = "john.doe@fake.net";
      const employee = new Employee(name, id, email);
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});